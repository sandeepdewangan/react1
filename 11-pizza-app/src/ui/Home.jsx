import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center md:text-3xl">
      <h1 className="text-xl font-semibold text-stone-900">
        Best and Delicious 😋
      </h1>
      <h1 className="text-xl font-bold text-orange-500 ">🍕 Pizzas 🍕</h1>

      <CreateUser />
    </div>
  );
}

export default Home;
