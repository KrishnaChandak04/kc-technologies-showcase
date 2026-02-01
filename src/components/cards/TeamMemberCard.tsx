import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  index?: number;
}

const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-amber-500",
  "from-green-500 to-emerald-500"
];

const TeamMemberCard = ({ name, role, bio, image, index = 0 }: TeamMemberCardProps) => {
  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={cn(
        "group relative p-8 rounded-3xl text-center",
        "bg-card border border-border/50",
        "hover-lift transition-all duration-500",
        "animate-fade-up"
      )}
      style={{ animationDelay: `${300 + index * 100}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className={cn(
        "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500",
        "bg-gradient-to-br",
        gradient
      )} />

      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className={cn(
          "absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity",
          "bg-gradient-to-br",
          gradient
        )} />
        <div className={cn(
          "relative w-24 h-24 rounded-full flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br",
          gradient,
          "shadow-lg"
        )}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-4xl font-black text-white">
              {name.charAt(0)}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className={cn("font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r", gradient)}>
        {role}
      </p>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {bio}
      </p>
    </div>
  );
};

export default TeamMemberCard;
