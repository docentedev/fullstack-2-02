interface HomeProps {
  formLogin: {
    username: string;
    password: string;
  };
}

const Home = (props: HomeProps) => {
  return (
    <div>
      Home
      <h2>Username: {props.formLogin.username}</h2>
      <h2>Password: {props.formLogin.password}</h2>
    </div>
  );
};

export default Home;
