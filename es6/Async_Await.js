// async and await

async function joke() {
  try {
    const getjoke = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      {
        method: "get",
      }
    );

    //   console.log(getjoke.json());
    const { type, setup, punchline, id } = await getjoke.json();

    console.log(type, setup, punchline, id);
  } catch (error) {
    console.log(error);
    console.error(error);
  }
}

joke();
