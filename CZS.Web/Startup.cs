using System.Threading.Tasks;
using CZS.Web.Data;
using DotNetify;
using DotNetify.Security;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OAuth.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;

namespace CZS.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();
            services.AddSignalR();
            services.AddDotNetify();

            services.AddDbContext<DataContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")),
                ServiceLifetime.Transient,
                ServiceLifetime.Transient);


            services.AddAuthentication(options =>
                {
                    options.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                })

                .AddCookie(options =>
                {
                    options.LoginPath = "/Authorization/Login";
                    options.LogoutPath = "/Authorization/Logout";
                    options.AccessDeniedPath = "/";
                })

                .AddDiscord(options =>
                {
                    options.ClientId = Configuration.GetSection("AppSettings")
                        .GetValue<string>("DiscordOAuthClientID");
                    options.ClientSecret = Configuration.GetSection("AppSettings")
                        .GetValue<string>("DiscordOAuthClientSecret");
                    options.CallbackPath = "/Authorization/Authenticated";
                    options.Scope.Add("identify email");
                    options.ClaimActions.Add(new JsonKeyClaimAction("Discriminator", typeof(string).ToString(), "discriminator"));
                    options.ClaimActions.Add(new JsonKeyClaimAction("Avatar", typeof(string).ToString(), "avatar"));

                    options.Events.OnRemoteFailure = (context) =>
                    {
                        context.Response.Redirect("/");
                        context.HandleResponse();
                        return Task.FromResult(0);
                    };
                });

            services.AddMvc();

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true,
                    ReactHotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });


            app.MapWhen(x => !x.Request.Path.Value.StartsWith("/dotnetify"), builder =>
            {
                builder.UseMvc(routes =>
                {
                    routes.MapSpaFallbackRoute(
                        name: "spa-fallback",
                        defaults: new { controller = "Home", action = "Index" });
                });
            });

            app.UseWebSockets();
            app.UseSignalR(routes => routes.MapDotNetifyHub());
            app.UseDotNetify(config =>
            {
                config.UseFilter<AuthorizeFilter>();

            });

        }
    }
}
