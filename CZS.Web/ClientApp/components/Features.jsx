import * as React from 'react';
import * as dotnetify from 'dotnetify';
import AbilityViewer from './AbilityViewer';
import SkillViewer from './SkillViewer';
import ProfessionViewer from './ProfessionViewer';
import { Link } from 'react-router-dom'

export default class Features extends React.Component {
    constructor(props) {
        super(props);
        this.vm = dotnetify.react.connect('FeaturesViewModel', this);
        this.state = { Skills: [], Abilities: [], Professions: [] }
    }

    componentWillUnmount() {
        this.vm.$destroy();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="center">Features</h2>
                    </div>
                </div>

                <hr />

                <div className="row">&nbsp;</div>

                <div className="row">
                    <div className="col-3">

                        <div className="sidebar">
                            <h4 className="center">Quick Links</h4>
                            <div className="list-group" id="topics">
                                <a href="/features#story" className="list-group-item list-group-item-action"> 
                                    Story
                                </a>
                                <a href="/features#survival" className="list-group-item list-group-item-action">
                                    Survival
                                </a>
                                <a href="/features#character-progression" className="list-group-item list-group-item-action">
                                    Character Progression
                                </a>
                                <a href="/features#structure-building" className="list-group-item list-group-item-action">
                                    Structure Building
                                </a>
                                <a href="/features#magic-and-abilities-system" className="list-group-item list-group-item-action">
                                    Magic + Abilities System
                                </a>
                                <a href="/features#crafting" className="list-group-item list-group-item-action">
                                    Crafting
                                </a>
                                <a href="/features#professions" className="list-group-item list-group-item-action">
                                    Professions
                                </a>

                            </div>
                        </div>
                        

                    </div>

                    <div className="col-9">
                        <div data-spy="scroll" data-target="#topics" data-offset="0">

                            <h4 className="center" id="story">Story</h4>
                            <p>
                                Almost a decade after the human race arrived on planet Avantasia, the dust had far from settled.
                            </p>
                            <p>
                                Racial tensions were high, each with their own problems, goals, and agendas.
                            </p>
                            <p>
                                Humans, newly arrived from their own ravaged planet were met with suspicion.
                            </p>
                            <p>
                                The Elves, selfish and aloof in their ways, their self-entitled attitude isolating them from the rest.
                            </p>
                            <p>
                                The Dwarves, steeped in tradition and the old ways of Avantasia making them unrelatable to many of the other inhabitants of the planet.
                            </p>
                            <p>
                                The Orcs, bio-engineered creations of the Elves, slaves to their own genetic coding.
                            </p>
                            <p>
                                The Gnomes, mad geniuses in their own rights, forward thinkers and free spirits.
                            </p>
                            <p>
                                The Halflings, salt of the earth, hard working folk with little time for the intrigues of their fellows.
                            </p>
                            <p>
                                Six distinct peoples with their own motivations and traditions.
                            </p>
                            <p>
                                Now though, a new threat sweeps across the planet; The Shu'rhat. The dead now walk the surface of Avantasia, motivated only by their need to feed. 
                            </p>
                            <p>
                                Can the six races cohabiting on Avantasia settle their differences, or at least put them aside long enough to tackle the disease that is a threat to them all? Or will old hostilities, coupled with the shambling undead be the undoing of the humans, elves, dwarves, orcs, gnomes and halflings sharing the planet?
                            </p>
                            <p>
                                Join Cyberpunk Zombie Survival now and become part of the story, and help shape the future of Avantasia!
                            </p>



                            <hr />

                            <h4 className="center" id="survival">Survival</h4>
                            <p>
                                Cyberpunk Zombie Survival is a survival game first and foremost. This means a few things...


                            </p>

                            <ol>
                                <li>
                                    <p>
                                        Players must eat periodically or they will suffer penalties. Starving to death results in death of your character.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The difficulty can be challenging - especially early on. You shouldn't expect to barrel into a group of zombies and survive. You need to play smarter to stay alive.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Characters have a limited number of revival stones (lives). Every time you respawn, one revival stone is used. If you run out of revival stones the only way to return to life is through roleplay.
                                    </p>
                                </li>
                            </ol>

                            <p>
                                We offer a unique gameplay experience you aren't going to find anywhere else. Read on to learn more!
                            </p>

                            <hr />

                            <h4 className="center" id="character-progression">Character Progression</h4>
                            <p>
                                Build the character of your dreams! You can build every aspect of your character from the ground up.
                            </p>
                            <p>
                                Every time you level up your character receives 10 Skill Points (SP) to spend on upgrades of you choosing.
                                You may spend these at any time by accessing your 'Rest Menu' (press R or select 'Open Rest Menu' from your Omni Tool item in your inventory).
                            </p>
                            <p>
                                From here, you can select everything from increasing Hit Points to improving your firearm proficiencies. There are no set classes - you decide how to build your 100% unique character.
                            </p>

                            <SkillViewer skills={this.state.Skills} />

                            <hr />

                            <h4 className="center" id="structure-building">Structure Building</h4>
                            <p>
                                Fortify yourself! Create your very own campsites, bases, and fortresses using our unique structure system.
                            </p>
                            <p>
                                You'll start by choosing which object you would like to build. Everything from chairs and tables to crafting devices and research terminals can be made.
                            </p>
                            <p>
                                To access the structure system you simply need to choose 'Structure Tool' from the 'Omni Tool' inventory item on your character. Then, select a location and follow the on-screen prompts.
                            </p>
                            <p>
                                Structures are then manually built by collecting resources and applying them to the construction site. Don't worry if you can't finish in one session - all progress is persistently stored and waiting for you the next time you log in.
                            </p>

                            <hr />

                            <h4 className="center" id="magic-and-abilities-system">Magic + Abilities System</h4>
                            <p>
                                Like everything else, we offer a completely custom take on magic and abilities.
                            </p>
                            <p>
                                Abilities can be learned by uploading items called Ability Discs into your AMP. Once uploaded, you can equip and unequip abilities at terminals found throughout the game world.
                            </p>
                            <p>
                                All players start with one ability slot and can unlock up to 10 in total. The best part about this is that you can switch your loadout as many times as you want!
                            </p>
                            <p>
                                Magic has also received a few changes too. Spells can be cast by any character so long as they have sufficient Mana. Mana can be upgraded with <a href="/features/#character-progression">skill points</a> and recovers slowly over time.

                                You can also recover mana quicker by using crafted "Mana Kits".
                            </p>

                            <AbilityViewer abilities={this.state.Abilities} />

                            <hr />

                            <h4 className="center" id="crafting">Crafting</h4>
                            <p>
                                All manner of items can be created using our custom crafting system.

                                We currently offer four distinct crafts:
                            </p>

                            <ul>
                                <li>
                                    Smithery: Build metal-based items like swords, armor, and nails.
                                </li>
                                <li>
                                    Engineering: Manufacture electronics like ability discs, firearms, and ammunition.
                                </li>
                                <li>
                                    Mixing: Combine first aid items such as bandages, stimulants, and gunpowder.
                                </li>
                                <li>
                                    Researching: This craft enables you to choose new blueprints to create using a Research Terminal.
                                </li>
                            </ul>

                            <p>
                                You are never limited with our crafting system. If you put in the time and effort you can become a master of all of them!
                            </p>

                            <hr />

                            <h4 id="professions" className="center">Professions</h4>

                            <p>
                                What kind of character were you before the outbreak? Professions let you pick a background for your character which grants some starting bonuses.
                            </p>

                            <p>
                                Don't like the options? Simply select Vagabond and create a character of your very own!
                            </p>

                            <ProfessionViewer professions={this.state.Professions} />

                            <hr />

                        </div>

                    </div>

                </div>

            </div>
        );



    }
}
