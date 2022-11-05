import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Footer } from './index';
import { useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';

const Results = () => {
  // const { data: session } = useSession();
  const tags = trpc.useQuery(['tags.getAllTags']);
  console.log('client data - ', tags, tags.data);
  // const { data: tags, success, isloading } = response;

  const createTagMutation = trpc.useMutation(['tags.create-tag']);
  const updateTagMutation = trpc.useMutation(['tags.update-tag']);

  const createTagHandler = () => {
    const tag = {
      name: 'teatTag',
      category: ['test'],
    };
    createTagMutation.mutate(tag);
  };

  const updateTagHandler = () => {
    const tag = {};
  };

  return (
    <>
      <Flex
        w="100%"
        p={4}
        direction="column"
        justify="space-between"
        align="center"
      >
        Results
        <Button onClick={updateTagHandler}>Create Tag</Button>
        <Flex>{tags.data && tags.data.map((tag) => <p>{tag.name}</p>)}</Flex>
        <Footer />
      </Flex>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const { data: session } = useSession();
//   const tags = trpc.useQuery(['tags.getAllTags']);
//   console.log('server side data - ', tags);
//   return {
//     props: {
//       tags,
//     },
//   };
// };

export default Results;
