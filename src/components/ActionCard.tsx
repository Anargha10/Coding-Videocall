import { QuickActionType } from "@/constants";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

//some weird tailwind thing
// from-orange-500/10 via-orange-500/5 to-transparent
// from-blue-500/10 via-blue-500/5 to-transparent
// from-purple-500/10 via-purple-500/5 to-transparent
// from-primary/10 via-primary/5 to-transparent

function ActionCard({ action, onClick }: { action: QuickActionType; onClick: () => void }) {
  return (
    <Card
      className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      {/* ACTION GRADIENT */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-100 group-hover:opacity-50 transition-opacity",
          action.gradient
        )}
      />

      {/* ACTION CONTENT WRAPPER */}
      <div className="relative p-6 size-full">
        <div className="space-y-3">
          {/* ACTION ICON */}
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform",
              `bg-${action.color}/10`
            )}
          >
            <action.icon className={cn("h-6 w-6", `text-${action.color}`)} />
          </div>

          {/* ACTION DETAILS */}
          <div className="space-y-1">
            <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
              {action.title}
            </h3>
            <p className="text-sm text-muted-foreground">{action.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ActionCard;