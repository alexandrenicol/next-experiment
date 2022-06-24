import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  category: Category;
}

interface Category {
  id: string;
  name: string;
  posts: Post[];
}

interface Post {
  title: string;
  postid: string;
}

const categories = [
  {
    id: "frontend",
    name: "Frontend",
    posts: [
      {
        postid: "react",
        title: "React",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    posts: [
      {
        postid: "node",
        title: "Node.js",
      },
    ],
  },
];

const Category = (props: Props) => {
  return (
    <div>
      <h2>{props.category.name}</h2>
      <ul>
        {props.category.posts.map((post) => (
          <li key={post.postid}>
            <Link href={`/categories/${props.category.id}/${post.postid}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={`/categories`}>
        <a>back to categories</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = categories.map((category) => ({
    params: { id: category.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      category: categories.find(
        (category) => category.id === (params!.id as string)
      ),
    },
  };
};

export default Category;
