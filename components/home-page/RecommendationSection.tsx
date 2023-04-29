import Container from '../ui/Container';
import { getRecommendations } from '@/services';

const getData = async () => {
  const recommendations = (await getRecommendations()) || [];
  const sortedRecommendations = recommendations.filter(
    (item: { name: string }) => item.name === 'Elizabeth Cohen'
  );
  return sortedRecommendations;
};

export default async function RecommendationSection() {
  const data = await getData();
  //   {
  //     id: 'clg97o2ec1k0f0bl9uvboie4f',
  //     name: 'Elizabeth Cohen',
  //     position: 'Marketing Coordinator at Antidote',
  //     linkedin: 'https://www.linkedin.com/in/amandaelizabethcrum/',
  //     quote:
  //       'I have worked with Harel as a freelance developer at Antidote Health. He processes a great deal of knowledge and experience in the field of development, and always does extensive research when investigating if something can be done. Harel has great communication skills and professionalism and is always quick and efficient when completing projects. He has been a great pleasure to work with and I highly recommend him to any company looking to partner with him in development.',
  //     profileImage: { url: 'https://media.graphassets.com/KlZ4YmBSR6KVLO8kia9x', width: 200, height: 200 }
  //   }

  return (
    <section className='flex flex-col gap-6 items-center lg:py-28 lg:px-12'>
      <Container>
        <blockquote>{data[0].name}</blockquote>
      </Container>
    </section>
  );
}
