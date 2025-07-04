import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    // mutationFn: (id) => deleteBooking(id),
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking succesfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["booking"],
        //telling it wich exact data should be invalidated
      });
    },
    onError: (err) => toast.error(err.message),
    //we want to invalidate the cache as soon as the mutation is done. This function tell react query what to do as soon as the mutation is succesful
  });

  return { isDeleting, deleteBooking };
}
