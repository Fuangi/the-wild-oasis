import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleteing, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin succesfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
        //telling it wich exact data should be invalidated
      });
    },
    onError: (err) => toast.error(err.message),
    //we want to invalidate the cache as soon as the mutation is done. This function tell react query what to do as soon as the mutation is succesful
  });

  return { isDeleteing, deleteCabin };
}
