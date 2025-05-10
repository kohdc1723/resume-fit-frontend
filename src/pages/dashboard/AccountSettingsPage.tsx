import { UserProfile } from "@clerk/clerk-react";

export default function AccountSettingsPage() {
  return (
    <div className="flex items-center justify-center">
      <UserProfile
        appearance={{
          elements: {
            rootBox: {
              width: "100%",
              zIndex: 0
            },
            cardBox: {
              width: "100%"
            }
          }
        }}
      />
    </div>
  );
}