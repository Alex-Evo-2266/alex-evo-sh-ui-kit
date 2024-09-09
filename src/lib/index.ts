// ui

import { Button, TextButton, FilledButton, OutlineButton, FilledTotalButton, BaseButton } from "./ui/Base/Button/Button";
import {ColorField} from './ui/input/ColorField/ColorField'

import {ListContainer} from './ui/List/List'
import {ListItem} from './ui/List/ListItem'
import {IconButton} from './ui/Base/IconButton/IconButton'
import {Card} from './ui/Card/Card'
import {BaseActionCard} from './ui/Layout/BaseActionCard/BaseActionCard'
import {BigContainer} from './ui/Layout/BigContainer/BigContainer'
import {BottomSheetsUi} from './ui/Base/BottomSheets/BottomSheetsUi'
import {Checkbox} from './ui/Base/Checkbox/Checkbox'
import {Chips} from './ui/Base/Chips/Chips'
import {TextField} from './ui/input/TextField/TextField'
import {NumberField} from './ui/input/NumberField/NumberField'
import {TextArea} from './ui/input/TextArea/TextArea'
import {Divider} from './ui/Other/Divider/Divider'
import {RadioButton, BaseRadioButton} from './ui/Base/RadioButton/RadioButton'
import {FAB} from './ui/Base/FAB/FAB'
import {ContentBox} from './ui/Layout/ContentBox/ContentBox'
import {MoreText} from './ui/input/MoreText/MoreText'
import {RunningLine} from './ui/Text/RunningLine/RunningLine'
import {ScrollContainer} from './ui/Layout/ScrollContainer/ScrollContainer'
import {Search} from './ui/Other/Search/Search'
import {Snackbar} from './ui/Other/Snackbar/Snackbar'
import {Switch} from './ui/Base/Switch/Switch'
import {SigmentedButton} from './ui/Base/SigmentedButton/SigmentedButton'
import {Slider} from './ui/input/Slider/Slider'


import {BasicTemplateDialog} from './ui/Dialog/TemplateDialog/BasicTemplateDialog'
import {FullScrinTemplateDialog} from './ui/Dialog/TemplateDialog/FullScreenTemplateDialog'
import {ModalTemplate} from './ui/Dialog/TemplateDialog/ModalTemplate'
import {BaseDialog} from './ui/Dialog/BaseDialog/BaseDialog'
import {SelectionDialog} from './ui/Dialog/BaseDialog/SelectionDialog'
import {TextDialog} from './ui/Dialog/BaseDialog/TextDialog'
import {TimeField} from './ui/input/TimeField/TimeField'
import {DateField} from './ui/input/DateField/DateField'

import {СalendarPickers} from './ui/input/DateField/DatePickers'
import {TimePicker} from './ui/input/TimeField/TimePickers'
import {DayOfWeekField} from './ui/input/DayOfWeek/DayOfWeek'
import {GridLayoutItem} from './ui/Layout/GridLayout/GridLayout'
import GridLayout from './ui/Layout/GridLayout/GridLayout'
import {ColumnLayout} from './ui/Layout/ColumnLayout/ColumnLayout'
import {BaseMenu} from './ui/Menu/BaseMenu'
import {Menu} from './ui/Menu/Menu'
import {SmallWindowMenu} from './ui/Menu/SmallWindowMenu'
import {Table} from './ui/Table/Table'

import {NavigationBar} from './ui/Navigation/NavigationBar/NavigationBar'
import {NavigationDrawer} from './ui/Navigation/NavigationDrawer/NavigationDrawer'
import {NavigationRail} from './ui/Navigation/NavigationRail/NavigationRail'
import {EmptyPage} from './ui/Other/EmptyPage/EmptyPage'


import {JsonContainer} from './ui/Other/JSON/Json'
export type {NavigationBtn, NavigationButton, NavigationLink} from './model/navigation'

import './ui/index.scss'

export type {MenuStateProps} from './model/menu'

export type {IOptionSnackbar, SnackbarProps} from './ui/Other/Snackbar/Snackbar'

export type {styleType} from './ui/Base/Button/Button'

export type {IColumnElement} from './ui/Layout/ColumnLayout/ColumnLayout'

export {
    BaseMenu,
    Button, 
    FAB,
    FilledButton, 
    TextButton, 
    OutlineButton, 
    FilledTotalButton, 
    BaseButton,
    ListContainer,
    ListItem,
    IconButton,
    Card,
    BaseActionCard,
    BigContainer,
    BottomSheetsUi,
    Checkbox,
    Chips,
    BasicTemplateDialog,
    FullScrinTemplateDialog,
    ModalTemplate,
    BaseDialog,
    SelectionDialog,
    TextDialog,
    TextField,
    ColorField ,
    NumberField,
    TextArea,
    RadioButton,
    BaseRadioButton,
    Divider,
    СalendarPickers,
    DayOfWeekField,
    ContentBox,
    GridLayoutItem,
    GridLayout,
    Menu,
    SmallWindowMenu,
    MoreText,
    RunningLine,
    ScrollContainer,
    Search,
    Snackbar,
    Switch,
    TimePicker,
    Table,
    SigmentedButton,
    Slider,
    NavigationBar,
    NavigationDrawer,
    NavigationRail,
    EmptyPage,
    ColumnLayout,
    JsonContainer,
    TimeField,
    DateField
}

// helpers

import {getContainerData, getModalWindowCord, IContainerData, IOptionModalWindowCord} from './helpers/getModalCord'
import {map} from './helpers/map'

export {getContainerData, getModalWindowCord}
export type {IContainerData, IOptionModalWindowCord}
export {map}

export {hexToRgb, HSVtoHSL, HEXtoRGB, HSLtoHSV, HSVtoRGB, RGBtoHSV} from './helpers/color/colorConvert'

//models

export type {IBlock, IMenuItem, IMenuOption, IMenuSubItem} from './model/menu'
export type {IPoint} from './model/point'
export type {ICell, IColumn, IDataItem, ITable, ITableAction, celData} from './model/table'
export type {JsonData, JsonDataArray, JsonDataBaseTypes ,JsonDataObject, JsonFormat, JsonFormatArray, JsonFormatBaseTypes, JsonFormatObject} from './model/jsonComponentModel'

export {DialogModal} from './portal/dialog'


//function

export {getTextColor, getContainerColor} from './helpers/color/colorGenerator'

export {useColor} from './hooks/color.hook'
export type {ChangeColor, ColorState, BaseColor, NightColor} from './model/color'


//text

export {H1, H2, H3, H4} from './ui/Text/Text/Heading'
export {SmallText} from './ui/Text/Text/SmallText'
export {BaseText} from './ui/Text/Text/BaseText'