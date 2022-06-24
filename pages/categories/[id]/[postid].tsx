import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  post: Post;
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
      <h2>{props.post.title}</h2>
      <Link href={`/categories/${props.category.id}`}>
        <a>back to the {props.category.name} category</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [];
  for (const category of categories) {
    for (const post of category.posts) {
      paths.push({ params: { id: category.id, postid: post.postid } });
    }
  }

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = categories.find(
    (category) => category.id === (params!.id as string)
  );

  const post = category?.posts.find(
    (post) => post.postid === (params!.postid as string)
  );

  return {
    props: {
      category,
      post,
    },
  };
};

export default Category;
