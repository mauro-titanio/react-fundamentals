import useCreateUser from "../hooks/query-hooks/useCreateUser";

export default function RqCreateUser() {
  const mutation = useCreateUser();
  return (
    <div>
      <button
        type="button"
        onClick={() => mutation.mutate({ name: "John Doe", age: 55 })}
      >
        Create User
      </button>
    </div>
  );
}
