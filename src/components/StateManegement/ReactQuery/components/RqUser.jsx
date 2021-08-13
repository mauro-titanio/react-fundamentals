import useUser from "../hooks/query-hooks/useUser"

export default function RqUser({selectedUser}) {
    const user = useUser(selectedUser)
    return (
        <div>
            {user.isLoading && <p>Loading user...</p>}
            {user.isSuccess && <p>{`${user.data.name} - ${user.data.address.street}`}</p>}
        </div>
    )
}
