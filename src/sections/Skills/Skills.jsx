import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill={"Ubuntu"}/>
        <SkillList src={checkMarkIcon} skill={"CentOS"}/>
        <SkillList src={checkMarkIcon} skill={"Windows"}/>
        <SkillList src={checkMarkIcon} skill={"MacOS"}/>
        <SkillList src={checkMarkIcon} skill={"Linux"}/>
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill={"AWS"}/>
        <SkillList src={checkMarkIcon} skill={"RDS"}/>
        <SkillList src={checkMarkIcon} skill={"IAM"}/>
        <SkillList src={checkMarkIcon} skill="EC2" />
        <SkillList src={checkMarkIcon} skill="S3" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill={"Azure"} />
        <SkillList src={checkMarkIcon} skill={"Docker"}/>
        <SkillList src={checkMarkIcon} skill={"Kubernetes"}/>
        <SkillList src={checkMarkIcon} skill={"GitLab"}/>
        <SkillList src={checkMarkIcon} skill={"CI"}/>
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill={"Salt Stack"}/>
        <SkillList src={checkMarkIcon} skill={"Pulumi"}/>
        <SkillList src={checkMarkIcon} skill={"Ansible"}/>
        <SkillList src={checkMarkIcon} skill={"Prometheus"}/>
        <SkillList src={checkMarkIcon} skill={"Elastic APM"}/>
      </div>
      <hr />
      <div className={styles.skillList}>
        
      <SkillList src={checkMarkIcon} skill={"ELK Stack"}/>
        <SkillList src={checkMarkIcon} skill={"Git"}/>
        <SkillList src={checkMarkIcon} skill={"Bash"}/>
        <SkillList src={checkMarkIcon} skill={"ECS"}/>
        <SkillList src={checkMarkIcon} skill={"Agile"}/>
      </div>
    </section>
  );
}

export default Skills;