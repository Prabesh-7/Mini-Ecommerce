import {
  Smartphone,
  Headphones,
  Watch,
  Zap,
  Shield,
  Gift,
  Laptop,
  Camera,
  Music,
  HardDrive,
  Gamepad2,
  Wifi,
  Battery,
  Type,
  Package,
  LucideIcon,
} from "lucide-react";

// Map icon names to Lucide components
export const iconMap: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  headphones: Headphones,
  watch: Watch,
  zap: Zap,
  shield: Shield,
  gift: Gift,
  laptop: Laptop,
  camera: Camera,
  music: Music,
  harddrive: HardDrive,
  gamepad: Gamepad2,
  wifi: Wifi,
  battery: Battery,
  type: Type,
  package: Package,
};

// Get icon by name, fallback to Smartphone if not found
export function getIconComponent(iconName?: string): LucideIcon {
  if (!iconName) return Smartphone;
  
  const normalizedName = iconName.toLowerCase().replace(/[_-\s]/g, "");
  return iconMap[normalizedName] || Smartphone;
}
