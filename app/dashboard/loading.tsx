import Loader from "./_components/loader/loader";

const Loading = () => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Loader />
    </div>
  );
};
export default Loading;
