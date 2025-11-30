import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAboutNous } from "@/services/aboutUsService";
import { AboutNousPayload } from "@/types/aboutUs";
import { useToast } from "@/hooks/use-toast";

export const useAboutUs = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: createAboutNous,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["aboutUs"] });
      toast({
        title: "Success",
        description: "About Us content created successfully",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    createAboutNous: (payload: AboutNousPayload) => createMutation.mutateAsync(payload),
    isCreating: createMutation.isPending,
  };
};
