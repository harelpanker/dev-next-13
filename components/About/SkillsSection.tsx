import { FC } from 'react';
import Container from '../ui/Container';

type SkillsSectionProps = {};

const SkillsSection: FC<SkillsSectionProps> = ({}) => {
  return (
    <section>
      <Container size='md'>
        <h2 className='font-semibold text-3xl'>I know a thing or two on:</h2>
      </Container>
    </section>
  );
};

export default SkillsSection;
