import useRouter from '~/hooks/useRouter';

const Root = () => {
  const { push } = useRouter();

  return <div onClick={() => push('/about')}>go to about</div>;
};

export default Root;
