import { fetchWorkspacesRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useQuery } from "@tanstack/react-query";


export const useGetWorkspacesById = (id) => {

    const { auth } = useAuth();
    const { isFetching, isSuccess, error, data: workspaces } = useQuery({
        queryFn: () => fetchWorkspacesRequest({workspaceId: id, token: auth?.token }),
        queryKey: [`getWorkspaceById~${id}`],
        staleTime: 10000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspaces
    };
}