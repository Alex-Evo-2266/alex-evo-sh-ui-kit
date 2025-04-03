export interface BaseColor {
    Primary_color: string;
    Secondary_color: string;
    Tertiary_color: string;
    Surface_container_color: string;
    Background_color: string;
    Error_color: string;
    Outline_color: string;
    Shadow_color: string;
}
export interface NightColor {
    Primary_color_night: string;
    Secondary_color_night: string;
    Tertiary_color_night: string;
    Surface_container_color_night: string;
    Background_color_night: string;
    Error_color_night: string;
    Outline_color_night: string;
    Shadow_color_night: string;
}
export declare const mapNightColorToBaseColor: (colors: NightColor) => BaseColor;
export interface IColorDepends {
    [key: string]: {
        container?: string[];
        text?: string[];
        low?: string[];
        high?: string[];
        variant?: string[];
    };
}
export interface ChangeColor {
    Primary_color?: string;
    Secondary_color?: string;
    Tertiary_color?: string;
    Surface_container_color?: string;
    Background_color?: string;
    Primary_color_night?: string;
    Secondary_color_night?: string;
    Tertiary_color_night?: string;
    Surface_container_color_night?: string;
    Background_color_night?: string;
    Error_color?: string;
    Error_color_night?: string;
    Outline_color?: string;
    Shadow_color?: string;
    Outline_color_night?: string;
    Shadow_color_night?: string;
}
export interface TextColor {
    On_primary_color: string;
    On_secondary_color: string;
    On_tertiary_color: string;
    On_background_color: string;
}
export interface ContainerColor {
    Primary_container_color: string;
    Secondary_container_color: string;
    Tertiary_container_color: string;
    Error_container_color: string;
}
export interface TextContainerColor {
    On_primary_container_color: string;
    On_secondary_container_color: string;
    On_tertiary_container_color: string;
    On_error_container_color: string;
    On_error_color: string;
}
export interface SurfaceColor {
    Surface_container_lowest_color: string;
    Surface_container_low_color: string;
    Surface_container_color: string;
    Surface_container_high_color: string;
    Surface_container_highest_color: string;
    On_surface_color: string;
    On_surface_variant_color: string;
}
export interface ColorState extends BaseColor, TextColor, ContainerColor, TextContainerColor, SurfaceColor {
    Outline_variant_color: string;
}
