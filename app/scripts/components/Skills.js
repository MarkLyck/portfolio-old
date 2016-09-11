import React from 'react';
import $ from 'jquery';

import skills from '../other/skills';

const Skills = React.createClass({
  getInitialState() {
    return {resized: false}
  },
  componentDidMount() {
    $( window ).resize(() => {
      this.setState({resize: true})
    });
  },
  render() {
    const skillWidth = 110;
    const maxSkillsInOneList = Math.floor((($(window).width() - 110) / skillWidth))

    let skillsetItems = skills.map((skill, i) => {
      return (<li key={i} className="skill"><img src={skill.img}/></li>);
    })

    let skillLists = []
    let numberOfLists = Math.ceil(skillsetItems.length / maxSkillsInOneList)

    while (skillLists.length < numberOfLists) { skillLists.push('list') }

    let currentSkill = 0;

    skillLists = skillLists.map((skillList, i) => {
      let skillsInList = [];
      if(i % 2 === 0) {
        while (skillsInList.length < maxSkillsInOneList) {
          skillsInList.push(skillsetItems[currentSkill])
          currentSkill++
        }
      } else {
        while (skillsInList.length < (maxSkillsInOneList - 1)) {
          skillsInList.push(skillsetItems[currentSkill])
          currentSkill++
        }
      }
      if (i % 2 === 0 && currentSkill >= skillsetItems.length && currentSkill % 2 === 0) {
        console.log('special list');
        return (<ul className="skill-list" key={i} style={{marginRight: "110px"}}>{skillsInList}</ul>)
      } else {
        return (<ul className="skill-list" key={i}>{skillsInList}</ul>)
      }

    })

    console.log('window width: ', $(window).width());
    console.log('max items: ', ($(window).width() - 100) / skillWidth);

    return (
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillLists}
        </div>
      </div>
    )
  }
})

export default Skills
