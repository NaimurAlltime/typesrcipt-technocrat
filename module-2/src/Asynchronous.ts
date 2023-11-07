{
  //Asynchronous

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const getPost = async (): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    // console.log(data);
    return data;
  };

  getPost();

  type Something = { something: string };

  //simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    // console.log(data);
    return data;
  };

  showData();
}
