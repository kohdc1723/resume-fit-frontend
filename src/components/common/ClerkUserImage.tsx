import { useUser } from "@clerk/clerk-react";

import { Skeleton } from "@/components/ui/skeleton";

export default function ClerkUserImage() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return <Skeleton className="w-10 h-10 rounded-full" />;
  }

  if (!user) {
    return <Skeleton className="w-10 h-10 rounded-full" />;
  }

  const userImageUrl = user.imageUrl;

  return (
    <img
      src={userImageUrl}
      alt="profile-image"
      className="w-10 h-10 rounded-full"
    />
  );
}