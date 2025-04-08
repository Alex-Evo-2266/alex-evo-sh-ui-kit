import { pSBC } from "../helpers/color/colorContrast"
import { getTextColor } from "../helpers/color/colorGenerator"
import { BaseColor, IColorDepends, NightColor } from "../model/color"

export const colorDepends:IColorDepends = {
    Primary_color: {
        container:["Primary_container_color"], 
        text:["On_primary_color"]
    },
    Primary_container_color:{
        text:["On_primary_container_color"]
    },
    Secondary_color: {
        container:["Secondary_container_color"], 
        text:["On_secondary_color"]
    },
    Secondary_container_color:{
        text:["On_secondary_container_color"]
    },
    Tertiary_color: {
        container:["Tertiary_container_color"], 
        text:["On_tertiary_color"]
    },
    Tertiary_container_color:{
        text:["On_tertiary_container_color"]
    },
    Surface_container_color:{
        text:["On_surface_color"],
        low:["Surface_container_low_color"],
        high:["Surface_container_high_color"],
        hover:["Surface_container_hover_color"]
    },
    Surface_container_low_color:{
        low:["Surface_container_lowest_color"]
    },
    Surface_container_high_color:{
        high:["Surface_container_highest_color"]
    },
    Background_color:{
        text:["On_background_color"]
    },
    Error_color:{
        container:["Error_container_color"],
        text:["On_error_color"]
    },
    Error_container_color:{
        text: ["On_error_container_color"]
    },
    Outline_color:{
        low:["Outline_variant_color"]
    },
    On_surface_color:{
        variant:["On_surface_variant_color"]
    }
}

export const DefaultColor:BaseColor = {
    Primary_color:"#6750A4",
    Secondary_color:"#625B71",
    Tertiary_color:"#7D5260",
    Surface_container_color: "#F3EDF7",
    Background_color: "#FFFFFF",
    Error_color: "#B3261E",
    Outline_color: "#79747E",
    Shadow_color: "#000000"
}

export const DefaultNightColor:NightColor = {
    Primary_color_night:pSBC(0.9, getTextColor("#121212"), DefaultColor.Primary_color)??DefaultColor.Primary_color,
    Secondary_color_night:"#625B71",
    Tertiary_color_night:"#7D5260",
    Surface_container_color_night: "#121212",
    Background_color_night: "#101010",
    Error_color_night: "#B3261E",
    Outline_color_night: "#79747E",
    Shadow_color_night: "#000000"
}