import React from "react";

// the best way to take props is using promise
interface IProps {
  params: Promise<{
    postId: string;
  }>;
}

const page = async (props: IProps) => {
  const { postId } = await props.params;
  return (
    <div>
      <h1>{postId}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo voluptatibus
      eum totam! Ea dignissimos eaque corrupti neque iusto perspiciatis
      quibusdam, ad soluta doloribus necessitatibus debitis modi incidunt rerum
      nesciunt molestias?
    </div>
  );
};

export default page;
