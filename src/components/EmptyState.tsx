"use client";

import { useRouter } from "next/navigation";
import { Heading } from "./Heading";
import { Button } from "./Button";

type EmptyStateProps = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

export const EmptyState = ({
  title = "一致するものはありません",
  subtitle = "フィルターの一部を変更または削除してみてください",
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();
  return (
    <div>
      <Heading center title={title} subtitle={subtitle} />
      <div>
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};
