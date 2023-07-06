import useRouter from '~/hooks/useRouter';

const About = () => {
  const { push } = useRouter();

  return <div onClick={() => push('/')}>go to Root</div>;
};

export default About;
