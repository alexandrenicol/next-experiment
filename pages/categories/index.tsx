import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  categories: Categories[];
}

interface Categories {
  id: string;
  name: string;
}

const categories = [
  {
    id: "frontend",
    name: "Frontend",
  },
  { id: "backend", name: "Backend" },
];

const Categories = (props: Props) => {
  return (
    <ul>
      {props.categories.map((category) => (
        <li key={category.id}>
          <Link href={`/categories/${category.id}`}>
            <a>{category.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// export async function getStaticPaths() {
//   const paths = categories.map((category) => ({
//     params: { id: category.id },
//   }));

//   return { paths, fallback: false };
// }

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      categories,
    },
  };
};

export default Categories;
