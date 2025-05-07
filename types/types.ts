export interface BlueSkyResponse {
    data:    BlueSkyData;
    headers: Headers;
    success: boolean;
}

export interface BlueSkyData {
    feed:   Feed[];
    cursor: Date;
}

export interface Feed {
    post:    Post;
    reason?: Reason;
    reply?:  FeedReply;
}

export interface Post {
    uri:         string;
    cid:         string;
    author:      Author;
    record:      PostRecord;
    embed:       PostEmbed;
    replyCount:  number;
    repostCount: number;
    likeCount:   number;
    quoteCount:  number;
    indexedAt:   Date;
    labels:      any[];
    threadgate?: Threadgate;
}

export interface Author {
    did:         string;
    handle:      string;
    displayName: string;
    avatar:      string;
    labels:      any[];
    createdAt:   Date;
    associated?: Associated;
}

export interface Associated {
    chat: Chat;
}

export interface Chat {
    allowIncoming: AllowIncoming;
}

export enum AllowIncoming {
    All = "all",
    Following = "following",
}

export interface PostEmbed {
    $type:        PurpleType;
    external?:    PurpleExternal;
    cid?:         string;
    playlist?:    string;
    thumbnail?:   string;
    alt?:         string;
    aspectRatio?: AspectRatio;
    images?:      PurpleImage[];
    record?:      PurpleRecord;
}

export enum PurpleType {
    AppBskyEmbedExternalView = "app.bsky.embed.external#view",
    AppBskyEmbedImagesView = "app.bsky.embed.images#view",
    AppBskyEmbedRecordView = "app.bsky.embed.record#view",
    AppBskyEmbedVideoView = "app.bsky.embed.video#view",
}

export interface AspectRatio {
    height: number;
    width:  number;
}

export interface PurpleExternal {
    uri:         string;
    title:       string;
    description: string;
    thumb?:      string;
}

export interface PurpleImage {
    thumb:       string;
    fullsize:    string;
    alt:         string;
    aspectRatio: AspectRatio;
}

export interface PurpleRecord {
    $type:       string;
    uri:         string;
    cid:         string;
    author:      Author;
    value:       Value;
    labels:      any[];
    likeCount:   number;
    replyCount:  number;
    repostCount: number;
    quoteCount:  number;
    indexedAt:   Date;
    embeds:      EmbedElement[];
}

export interface EmbedElement {
    $type:    PurpleType;
    external: PurpleExternal;
}

export interface Value {
    $type:     ValueType;
    createdAt: Date;
    embed:     ValueEmbed;
    facets:    ValueFacet[];
    langs:     Lang[];
    text:      string;
}

export enum ValueType {
    AppBskyFeedPost = "app.bsky.feed.post",
}

export interface ValueEmbed {
    $type:    FluffyType;
    external: FluffyExternal;
}

export enum FluffyType {
    AppBskyEmbedExternal = "app.bsky.embed.external",
    AppBskyEmbedImages = "app.bsky.embed.images",
    AppBskyEmbedRecord = "app.bsky.embed.record",
    AppBskyEmbedVideo = "app.bsky.embed.video",
}

export interface FluffyExternal {
    description: string;
    thumb?:      Video;
    title:       string;
    uri:         string;
}

export interface Video {
    $type:    VideoType;
    ref:      Ref;
    mimeType: MIMEType;
    size:     number;
}

export enum VideoType {
    Blob = "blob",
}

export enum MIMEType {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    VideoMp4 = "video/mp4",
}

export interface Ref {
    $link: string;
}

export interface ValueFacet {
    features: PurpleFeature[];
    index:    Index;
}

export interface PurpleFeature {
    $type: FeatureType;
    uri:   string;
}

export enum FeatureType {
    AppBskyRichtextFacetLink = "app.bsky.richtext.facet#link",
    AppBskyRichtextFacetMention = "app.bsky.richtext.facet#mention",
    AppBskyRichtextFacetTag = "app.bsky.richtext.facet#tag",
}

export interface Index {
    byteEnd:   number;
    byteStart: number;
}

export enum Lang {
    En = "en",
}

export interface PostRecord {
    $type:     ValueType;
    createdAt: Date;
    embed:     PurpleEmbed;
    facets:    PurpleFacet[];
    text:      string;
    langs?:    Lang[];
    reply?:    RecordReply;
}

export interface PurpleEmbed {
    $type:        FluffyType;
    external?:    FluffyExternal;
    alt?:         string;
    aspectRatio?: AspectRatio;
    video?:       Video;
    images?:      FluffyImage[];
    record?:      ParentClass;
}

export interface FluffyImage {
    alt:         string;
    aspectRatio: AspectRatio;
    image:       Video;
}

export interface ParentClass {
    cid: string;
    uri: string;
}

export interface PurpleFacet {
    features: FluffyFeature[];
    index:    Index;
    $type?:   string;
}

export interface FluffyFeature {
    $type: FeatureType;
    tag?:  string;
    uri?:  string;
    did?:  string;
}

export interface RecordReply {
    parent: ParentClass;
    root:   ParentClass;
}

export interface Threadgate {
    uri:    string;
    cid:    string;
    record: ThreadgateRecord;
    lists:  any[];
}

export interface ThreadgateRecord {
    $type:         string;
    createdAt:     Date;
    hiddenReplies: any[];
    post:          string;
    allow?:        Allow[];
}

export interface Allow {
    $type: string;
}

export interface Reason {
    $type:     ReasonType;
    by:        Author;
    indexedAt: Date;
}

export enum ReasonType {
    AppBskyFeedDefsReasonRepost = "app.bsky.feed.defs#reasonRepost",
}

export interface FeedReply {
    root:   Parent;
    parent: Parent;
}

export interface Parent {
    uri:         string;
    cid:         string;
    author:      Author;
    record:      ParentRecord;
    embed:       ParentEmbed;
    replyCount:  number;
    repostCount: number;
    likeCount:   number;
    quoteCount:  number;
    indexedAt:   Date;
    labels:      any[];
    $type:       string;
}

export interface ParentEmbed {
    $type:       PurpleType;
    cid:         string;
    playlist:    string;
    thumbnail:   string;
    alt:         string;
    aspectRatio: AspectRatio;
}

export interface ParentRecord {
    $type:     ValueType;
    createdAt: Date;
    embed:     FluffyEmbed;
    facets:    FluffyFacet[];
    langs:     Lang[];
    text:      string;
}

export interface FluffyEmbed {
    $type:       FluffyType;
    alt:         string;
    aspectRatio: AspectRatio;
    video:       Video;
}

export interface FluffyFacet {
    features: TentacledFeature[];
    index:    Index;
}

export interface TentacledFeature {
    $type: FeatureType;
    tag:   string;
}

export interface Headers {
    "content-type": string;
}
