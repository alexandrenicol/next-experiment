import { GetServerSideProps } from "next";
import Link from "next/link";

interface Props {
  name: string;
}

const About = (props: Props) => {
  return (
    <div>
      <p>{props.name}</p>
      <Link href="/">
        <a>index page</a>
      </Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      name: "Alex",
    },
  };
};

export default About;
