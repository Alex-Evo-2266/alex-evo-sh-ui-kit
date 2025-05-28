// Импорты компонентов
import { BaseButton, Button, FilledButton, FilledTotalButton, OutlineButton, TextButton } from "./ui/Base/Button/Button";
import { CopyButton } from './ui/Base/CopyButton/CopyButton';
import { Range } from './ui/input/Range/Range'
import CircleInput from './ui/input/Range/RangeCircle'
import { FAB } from './ui/Base/FAB/FAB';
import { Tooltip } from './ui/Base/Tooltip/Tooltip';
import { IconButton } from './ui/Base/IconButton/IconButton';
import { IconButtonMenu } from './ui/Base/IconButtonMenu/IconButtonMenu';
import { Checkbox } from './ui/input/Checkbox/Checkbox';
import { Chips } from './ui/Base/Chips/Chips';
import { RadioButton } from './ui/Base/RadioButton/RadioButton';
import { SegmentedButton } from './ui/Base/SegmentedButton/SegmentedButton';
import { Switch } from './ui/Base/Switch/Switch';
import { BottomSheetsUi } from './ui/Base/BottomSheets/BottomSheetsUi';
import { BaseDialog } from './ui/Dialog/BaseDialog/BaseDialog';
import { SelectionDialog } from './ui/Dialog/BaseDialog/SelectionDialog';
import { TextDialog } from './ui/Dialog/BaseDialog/TextDialog';
import { BasicTemplateDialog } from './ui/Dialog/TemplateDialog/BasicTemplateDialog';
import { FullScreenTemplateDialog } from './ui/Dialog/TemplateDialog/FullScreenTemplateDialog';
import { ModalTemplate } from './ui/Dialog/TemplateDialog/ModalTemplate';
import { Card } from './ui/Card/Card';
import { BaseActionCard } from './ui/Layout/BaseActionCard/BaseActionCard';
import { BigContainer } from './ui/Layout/BigContainer/BigContainer';
import { ColumnLayout } from './ui/Layout/ColumnLayout/ColumnLayout';
import { ModalDialogTemplate } from './ui/Dialog/TemplateDialog/ModalDialogTemplate'
import { ContentBox } from './ui/Layout/ContentBox/ContentBox';
import GridLayout from './ui/Layout/GridLayout/GridLayout';
import { GridLayoutItem } from './ui/Layout/GridLayout/GridLayout';
import { Panel } from './ui/Layout/Panel/Panel';
import { ScrollContainer } from './ui/Layout/ScrollContainer/ScrollContainer';
import { Tabs } from './ui/Layout/Tabs/Tabs';
import { BaseMenu } from './ui/Menu/BaseMenu';
import { Menu } from './ui/Menu/Menu';
import { SmallWindowMenu } from './ui/Menu/SmallWindowMenu';
import { ListContainer } from './ui/List/List';
import { ListItem } from './ui/List/List';
import { Table } from './ui/Table/Table';
import { NavigationBar } from './ui/Navigation/NavigationBar/NavigationBar';
import { NavigationDrawer } from './ui/Navigation/NavigationDrawer/NavigationDrawer';
import { NavigationRail } from './ui/Navigation/NavigationRail/NavigationRail';
import { ColorField } from './ui/input/ColorField/ColorField';
import { DateField } from './ui/input/DateField/DateField';
import { DayOfWeekField } from './ui/input/DayOfWeek/DayOfWeek';
import { MoreText } from './ui/input/MoreText/MoreText';
import { NumberField } from './ui/input/NumberField/NumberField';
import { TextArea } from './ui/input/TextArea/TextArea';
import { TextField } from './ui/input/TextField/TextField';
import { TimeField } from './ui/input/TimeField/TimeField';
import { СalendarPickers } from './ui/input/DateField/DatePickers';
import { TimePicker } from './ui/input/TimeField/TimePickers';
import { Slider } from './ui/input/Slider/Slider';
import { Divider } from './ui/Other/Divider/Divider';
import { EmptyPage } from './ui/Other/EmptyPage/EmptyPage';
import { JsonContainer } from './ui/Other/JSON/Json';
import { Search } from './ui/Other/Search/Search';
import { SearchAndFilter } from './ui/Other/Search/SearchAndFilter';
import { Snackbar } from './ui/Other/Snackbar/Snackbar';
import { RunningLine } from './ui/Text/RunningLine/RunningLine';
import { Typography } from './ui/Text/Text/Typography';
import { SelectField } from './ui/input/SelectField/Select';
import { MultiFilter } from './ui/Other/Filter/Filter'

// Импорты хуков и утилит
import { useColor } from './hooks/color.hook';
import { useScrollLock } from './hooks/lockScroll.hook';
import { useScreenSize } from './hooks/screenSize.hook';
import { getContainerData, getModalWindowCord } from './helpers/getContainerPozAndSize';
import { map } from './helpers/map';
import { hexToRgb, HSVtoHSL, HEXtoRGB, HSLtoHSV, HSVtoRGB, RGBtoHSV } from './helpers/color/colorConvert';
import { getTextColor, getContainerColor } from './helpers/color/colorGenerator';
import { ModalPortal } from './portal/dialog';
import { usePopup, PopupState } from './ui/Base/Tooltip/hooks/Tooltip'

import { ScreenSize } from "./model/sizeScreen"
import {BaseType} from './ui/Other/JSON/JsonComponent'

// Импорты типов
import type { NavigationBtn, NavigationButton, NavigationLink } from './model/navigation';
import type { MenuStateProps } from './model/menu';
import type { IOptionSnackbar, SnackbarProps } from './ui/Other/Snackbar/Snackbar';
import type { styleType } from './ui/Base/Button/Button';
import type { IColumnElement } from './ui/Layout/ColumnLayout/ColumnLayout';
import type { IBlock, IMenuItem, IMenuOption, IMenuSubItem } from './model/menu';
import type { IPoint } from './model/point';
import type { ICell, IColumn, IDataItem, ITable, ITableAction, celData } from './model/table';
import type { JsonData, JsonDataArray, JsonDataBaseTypes, JsonDataObject, JsonFormat, JsonFormatArray, JsonFormatBaseTypes, JsonFormatObject } from './model/jsonComponentModel';
import type { ChangeColor, ColorState, BaseColor, NightColor } from './model/color';
import type { IContainerData, IOptionModalWindowCord } from './helpers/getContainerPozAndSize';
import type { IOption } from './ui/input/props';
import type { ButtonSearch } from './ui/Other/Search/Search'
import type { FilterGroup, SelectedFilters } from './ui/Other/Filter/Filter'


// Импорт провайдеров
import {ColorProvider, ColorContext} from './ui/Provider/ColorProvider'
import {SizeProvider, SizeContext} from './ui/Provider/SizeProvider'

// Импорты стилей и иконок
import './ui/index.scss';

// Экспорты компонентов
export {
  MultiFilter,
  Tooltip,
  BaseActionCard,
  BaseButton,
  BaseDialog,
  BaseMenu,
  ModalDialogTemplate,
  BigContainer,
  BottomSheetsUi,
  Button,
  Card,
  Range,
  Checkbox,
  Chips,
  ColorField,
  ColumnLayout,
  ContentBox,
  CopyButton,
  DateField,
  DayOfWeekField,
  Divider,
  EmptyPage,
  FAB,
  CircleInput,
  FilledButton,
  FilledTotalButton,
  GridLayout,
  GridLayoutItem,
  IconButton,
  IconButtonMenu,
  JsonContainer,
  ListContainer,
  ListItem,
  Menu,
  ModalTemplate,
  MoreText,
  NavigationBar,
  NavigationDrawer,
  NavigationRail,
  NumberField,
  OutlineButton,
  Panel,
  RadioButton,
  RunningLine,
  ScrollContainer,
  Search,
  SearchAndFilter,
  SelectField,
  SelectionDialog,
  SegmentedButton,
  Slider,
  SmallWindowMenu,
  Snackbar,
  Switch,
  Table,
  Tabs,
  TextArea,
  TextButton,
  TextDialog,
  TextField,
  TimeField,
  TimePicker,
  Typography,
  BasicTemplateDialog,
  FullScreenTemplateDialog,
  СalendarPickers
};

// Экспорты хуков и утилит
export {
  usePopup,
  useColor,
  useScrollLock,
  useScreenSize,
  getContainerData,
  getModalWindowCord,
  hexToRgb,
  HSVtoHSL,
  HEXtoRGB,
  HSLtoHSV,
  HSVtoRGB,
  RGBtoHSV,
  map,
  getTextColor,
  getContainerColor,
  ModalPortal,
  ScreenSize,
  BaseType,
  PopupState
};

// Экспорты типов
export type {
  FilterGroup, 
  SelectedFilters,
  ButtonSearch,
  ChangeColor,
  ColorState,
  BaseColor,
  NightColor,
  IBlock,
  IMenuItem,
  IMenuOption,
  IMenuSubItem,
  IPoint,
  ICell,
  IColumn,
  IDataItem,
  ITable,
  ITableAction,
  celData,
  JsonData,
  JsonDataArray,
  JsonDataBaseTypes,
  JsonDataObject,
  JsonFormat,
  JsonFormatArray,
  JsonFormatBaseTypes,
  JsonFormatObject,
  MenuStateProps,
  IOptionSnackbar,
  SnackbarProps,
  styleType,
  IColumnElement,
  NavigationBtn,
  NavigationButton,
  NavigationLink,
  IContainerData,
  IOptionModalWindowCord,
  IOption
};

// Экспорты провайдеров
export {ColorProvider, ColorContext}
export {SizeProvider, SizeContext}

// Экспорты иконок
export * from './ui/Icons';

export {Form} from './ui/input/Form/Form'