export enum ConfigDataType {
  String,
  Number,
  Boolean,
  Date,
  Object,
}
export enum DialogType {
  MessageDialog,
  ConfirmDialog,
}
export enum AdminPermission {
  Notification,
  NotificationView,
  NotificationEdit,
  Mail,
  MailView,
  MailEdit,
  RewardPool,
  RewardPoolView,
  RewardPoolEdit,
  Authen,
  Config,
  ConfigView,
  ConfigEdit,
  User,
  UserView,
  UserEdit,
  Request,
  RequestView,
  RequestEdit,
  RequestApprove,
  Tool,
  MaintainTool,
}
export enum AlertType {
  Success,
  Info,
  Warning,
  Danger,
}
export interface ConfirmCallback {
  (result: boolean): void;
}
export interface Dialog {
  id?: number;
  type: DialogType;
  label?: string;
  content: string;
  onClose: Function;
  onResult: ConfirmCallback;
}

export interface GridEntity {
  name: string;
  label: string;
  api: string;
  buttons: Button[];
  columns: GridColumn[];
  filter: SearchItem[];
  host?: string;
  tokens?: any;
  inputs?: Input[];
}
export interface UserEntity {
  id: number;
  name: string;
  role: number;
  permissions: AdminPermission[];
}
export interface MenuEntity {
  name: string;
  url: string;
  icon: string;
  permissions: AdminPermission[];
  children: MenuEntity[];
}
export interface EnumEntity {
  name: string;
  items: EnumItem[];
  value_type: "string" | "number";
}
export interface FormEntity {
  name: string;
  label: string;
  api: number | string;
  buttons: Button[];
  controls: FormControl[];
  host?: string;
}
export enum UserRole {
  Admin,
  Teacher,
  Student,
  CustomerCare,
  Academic,
  Agent,
  AcademicManager,
}
export enum NotificationType {
  Message,
  NewUserRegister,
}
export enum CellDisplay {
  Text = "text",
  Number = "number",
  Date = "date",
  Image = "image",
  Switch = "switch",
  Enum = "enum",
  Entity = "entity",
  JSON = "json",
  Entities = "entities",
  ArrayString = "arraystring",
  File = "file",
  MultiLanguage = "multilanguage",
  Mail = "mail",
  Reward = "reward",
  Link = "link",
  RewardRarity = "rewardrarity",
  TreeView = "treeview",
  BidItem = "biditem",
  Ticket = "ticket",
  Chain = "chain",
}
export interface SearchItem {
  label: string;
  field: string;
  type: "text" | "number" | "date";
  control?: "input" | "enum" | "date" | "entity";
  enum?: string;
  multiple?: boolean;
  gridName: string;
}
export interface GridColumn {
  label: string;
  field: string;
  sortField?: string;
  display: CellDisplay;
  api?: string;
  sorter?: boolean;
  defaultSortOrder?: string;
  enumName?: string;
  fixed?: string;
  width: number;
  url?: string;
}
export interface Button {
  label: string;
  pageMode?: string;
  classes?: string;
  icon?: string;
  color?: string;
  showInColumn?: string;
  action: "api" | "redirect" | "connect";
  api?: string;
  redirectUrl?: string;
  redirectUrlEmbed?: any;
  embedData?: object;
  popupData?: object;
  confirmText?: string;
  backOnAction?: boolean;
  position?: string;
  successMessage?: string;
  failMessage?: string;
  disableReload?: boolean;
  hideExpression?: object;
}
export interface Input {
  label: string;
  field: string;
  display: CellDisplay;
}
export enum SchemaDataType {
  String = "string",
  Number = "number",
  Boolean = "boolean",
  Array = "array",
  Object = "object",
}
export enum SchemaControl {
  Enum = "enum",
  Text = "text",
  Number = "number",
  TextArea = "textarea",
  Image = "image",
  ArrayImage = "arrayimage",
  Location = "location",
  RichText = "richtext",
  Password = "password",
  Captcha = "captcha",
  Label = "label",
  Step = "step",
  Entity = "entity",
  JSON = "json",
  Date = "date",
  DateTime = "datetime",
  TextArray = "textarray",
  Divider = "divider",
  CheckList = "checklist",
  Checkbox = "checkbox",
  Schema = "schema",
  Upload = "upload",
  RewardEdit = "rewardedit",
  ListRewardEdit = "listrewardedit",
  MultiLanguage = "multilanguage",
  Mail = "mail",
  Tree = "tree",
  LockFeature = "lockfeature",
  UploadIdentity = "uploadidentity",
}

export interface FormControl {
  label: string;
  field: string;
  dataType: SchemaDataType;
  caption?: string;
  required: boolean;
  disabled: boolean;
  control: SchemaControl;
  gridName: string;
  schemaName: string;
  enum: string;
  hideExpression?: object;
  requireExpression?: object;
  api: string;
  multiple?: boolean;
  description: string;
  placeholder?: string;
  displayField?: string;
  subLabels?: string[];
  maxLength?: string;
  max?: number;
  min?: number;
  show?: any;
  default?: any;
  length?: number;
}
export enum Language {
  English,
  Chinese,
}
export interface EnumItem {
  value: string;
  label: string;
  color?: string;
}
export enum CourseStatus {
  WaitingForApprove,
  Approve,
  Cancel,
  Expired,
}

export enum CourseType {
  Trial,
  Official,
}

export enum RewardType {
  Point,
}
export interface RewardEntity {
  reward_type: RewardType;
  reward_quantity: number;
}
export const AllColors = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
];
export enum YesNoEnum {
  No,
  Yes,
}
export enum FeatureAffect {
  All,
  Account,
  BSC,
  Terra,
  Avalanche,
  Facebook,
  Google,
  Okex,
}
export enum Feature {
  ALL,
  DAO_LOGIN,
  DAO_STAKE_MSTR,
  DAO_STAKE_MAG,
  DAO_IMPORT_FT,
  DAO_UNSTAKE_MSTR,
  DAO_UNSTAKE_MAG,
  DAO_CONVERT_FT,
  DAO_REFERRAL_EVENT,
  DAO_REFERRAL_SUBMIT,
  DAO_FAUCET,
  DAO_CLAIM_REWARD,
  DAO_RESTAKE_REWARD,
  GAMEPLAY_LOGIN,
  GAMEPLAY_STAKE_MAG,
  GAMEPLAY_STAKE_MSTR,
  GAMEPLAY_CONVERT_NFT,
  GAMEPLAY_CONVERT_FT,
  GAMEPLAY_IMPORT_NFT,
  GAMEPLAY_IMPORT_FT,
  GAMEPLAY_REFILL_ENERGY,
  GAMEPLAY_MAIL,
  GAMEPLAY_ADVENTURE,
  GAMEPLAY_BATTLEFRONT,
  GAMEPLAY_BOSS_CHALLENGE,
  GAMEPLAY_ARENA,
  GAMEPLAY_INVENTORY,
  GAMEPLAY_BUILD,
  GAMEPLAY_MONGEN_INFO,
  GAMEPLAY_CLAIM_DAILY_QUEST,
  SUPPORT_LOGIN,
  SCHOLAR_LOGIN,
  GAMEPLAY_EDIT_LAND,
  GAMEPLAY_CREATE_BLUE_PRINT,
  GAMEPLAY_HATCH_EGG,
  GAMEPLAY_BREED,
  GAMEPLAY_FEED_FOOD,
  GAMEPLAY_EVOLVE,
  GAMEPLAY_EXTRACT_EVO,
  GAMEPLAY_EDIT_SKILL,
  GAMEPLAY_UPGRADE_PLOT,
  GAMEPLAY_TRAINING_TROOPS,
  GAMEPLAY_EVENT_BUTTON,
  GAMEPLAY_WRITE_LOG,
  BATTLE_SHARE_GAME,
  MINIGAME,
  GAMEPLAY_SKIP_PLOT,
}
