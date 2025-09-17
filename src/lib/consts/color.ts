import { IColorDepends } from "../model/color"

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

export const baseColors = {
  Primary_color: "#6750A4",        // фиолетовый акцент
  Secondary_color: "#8c5a9c",      // серо-фиолетовый
  Tertiary_color: "#7D5260",       // розово-коричневый
  Background_color: "#FFFBFE",     // почти белый
  Surface_container_color: "#FFFBFE",
  Error_color: "#B3261E",          // красный
  Outline_color: "#79747E",        // серый
  Shadow_color: "#000000"          // чёрный (для теней)
}


export const baseColorsDark = {
  Primary_color: "#D0BCFF",        // светло-фиолетовый
  Secondary_color: "#dbb0e8",      // серо-фиолетовый
  Tertiary_color: "#EFB8C8",       // розоватый
  Background_color: "#1C1B1F",     // почти чёрный
  Surface_container_color: "#1C1B1F",
  Error_color: "#F2B8B5",          // светло-красный
  Outline_color: "#938F99",        // светло-серый
  Shadow_color: "#000000"
}