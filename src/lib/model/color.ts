export interface BaseColor{
    Primary_color: string,
    Secondary_color: string,
    Tertiary_color: string,
    Surface_container_color: string,
    Background_color:string,
    Error_color: string,
    Outline_color:string,
    Shadow_color: string
}

export interface NightColor{
    Primary_color_night: string,
    Secondary_color_night: string,
    Tertiary_color_night: string,
    Surface_container_color_night: string,
    Background_color_night:string
    Error_color_night: string,
    Outline_color_night:string,
    Shadow_color_night: string
}

export const mapNightColorToBaseColor = (colors:NightColor):BaseColor => ({
    Primary_color: colors.Primary_color_night,
    Secondary_color: colors.Secondary_color_night,
    Tertiary_color: colors.Tertiary_color_night,
    Surface_container_color: colors.Surface_container_color_night,
    Background_color: colors.Background_color_night,
    Error_color: colors.Error_color_night,
    Outline_color: colors.Outline_color_night,
    Shadow_color: colors.Shadow_color_night
})

export interface IColorDepends {
    [key:string]:{
        container?:string[],
        text?:string[],
        low?:string[]
        high?:string[]
    }
}

export interface ChangeColor{
    Primary_color?: string,
    Secondary_color?: string,
    Tertiary_color?: string,
    Surface_container_color?: string,
    Background_color?:string
    Primary_color_night?: string,
    Secondary_color_night?: string,
    Tertiary_color_night?: string,
    Surface_container_color_night?: string
    Background_color_night?:string,
    Error_color?: string,
    Error_color_night?: string,
    Outline_color?:string,
    Shadow_color?: string,
    Outline_color_night?:string,
    Shadow_color_night?: string
}

export interface TextColor{
    On_primary_color: string,
    On_secondary_color: string,
    On_tertiary_color: string,
    On_background_color: string
}

export interface ContainerColor{
    Primary_container_color: string,
    Secondary_container_color: string,
    Tertiary_container_color: string,
    Error_container_color: string
}

export interface TextContainerColor{
    On_primary_container_color: string,
    On_secondary_container_color: string,
    On_tertiary_container_color: string,
    On_error_container_color: string
    On_error_color: string
}

export interface SurfaceColor{
    Surface_container_lowest_color: string,
    Surface_container_low_color: string,
    Surface_container_color: string,
    Surface_container_high_color: string,
    Surface_container_highest_color: string,
    On_surface_color: string
}

export interface ColorState extends BaseColor, TextColor, ContainerColor, TextContainerColor, SurfaceColor {
    Outline_variant_color: string
}

