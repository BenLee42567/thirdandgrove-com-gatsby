exports.typeDefs = `enum RemoteFileFit {
  COVER
  FILL
  OUTSIDE
  CONTAIN
}

enum RemoteFileFormat {
  AUTO
  JPG
  PNG
  WEBP
  AVIF
}

enum RemoteFileLayout {
  FIXED
  FULL_WIDTH
  CONSTRAINED
}

enum RemoteFilePlaceholder {
  DOMINANT_COLOR
  BLURRED
  TRACED_SVG
  NONE
}

enum RemoteFileCropFocus {
  CENTER
  TOP
  RIGHT
  BOTTOM
  LEFT
  ENTROPY
  EDGES
  FACES
}

type RemoteFileResize {
  width: Int
  height: Int
  src: String
}

"""Remote Interface"""
interface RemoteFile {
  id: ID!
  mimeType: String!
  filename: String!
  filesize: Int
  width: Int
  height: Int
  publicUrl: String!
  resize(
    width: Int
    height: Int
    aspectRatio: Float
    fit: RemoteFileFit = COVER

    """

    The image formats to generate. Valid values are AUTO (meaning the same
    format as the source image), JPG, PNG, WEBP and AVIF.
    The default value is [AUTO, WEBP, AVIF], and you should rarely need to
    change this. Take care if you specify JPG or PNG when you do
    not know the formats of the source images, as this could lead to unwanted
    results such as converting JPEGs to PNGs. Specifying
    both PNG and JPG is not supported and will be ignored.
    """
    format: RemoteFileFormat = AUTO
    cropFocus: [RemoteFileCropFocus]
    quality: Int = 75
  ): RemoteFileResize

  """
  Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info.
  """
  gatsbyImage(
    """

    The layout for the image.
    FIXED: A static image sized, that does not resize according to the screen width
    FULL_WIDTH: The image resizes to fit its container. Pass a "sizes" option if
    it isn't going to be the full width of the screen.
    CONSTRAINED: Resizes to fit its container, up to a maximum width, at which point it will remain fixed in size.

    """
    layout: RemoteFileLayout = CONSTRAINED

    """

    The display width of the generated image for layout = FIXED, and the display
    width of the largest image for layout = CONSTRAINED.
    The actual largest image resolution will be this value multiplied by the largest value in outputPixelDensities
    Ignored if layout = FLUID.

    """
    width: Int

    """

    If set, the height of the generated image. If omitted, it is calculated from
    the supplied width, matching the aspect ratio of the source image.
    """
    height: Int

    """

    Format of generated placeholder image, displayed while the main image loads.
    BLURRED: a blurred, low resolution image, encoded as a base64 data URI
    DOMINANT_COLOR: a solid color, calculated from the dominant color of the image (default).
    TRACED_SVG: deprecated. Will use DOMINANT_COLOR.
    NONE: no placeholder. Set the argument "backgroundColor" to use a fixed background color.
    """
    placeholder: RemoteFilePlaceholder = DOMINANT_COLOR

    """

    If set along with width or height, this will set the value of the other
    dimension to match the provided aspect ratio, cropping the image if needed.
    If neither width or height is provided, height will be set based on the intrinsic width of the source image.

    """
    aspectRatio: Float

    """

    The image formats to generate. Valid values are AUTO (meaning the same
    format as the source image), JPG, PNG, WEBP and AVIF.
    The default value is [AUTO, WEBP, AVIF], and you should rarely need to
    change this. Take care if you specify JPG or PNG when you do
    not know the formats of the source images, as this could lead to unwanted
    results such as converting JPEGs to PNGs. Specifying
    both PNG and JPG is not supported and will be ignored.

    """
    formats: [RemoteFileFormat!] = [AUTO, WEBP, AVIF]

    """

    A list of image pixel densities to generate for FIXED and CONSTRAINED
    images. You should rarely need to change this. It will never generate images
    larger than the source, and will always include a 1x image.
    Default is [ 1, 2 ] for fixed images, meaning 1x, 2x, and [0.25, 0.5, 1, 2]
    for fluid. In this case, an image with a fluid layout and width = 400 would
    generate images at 100, 200, 400 and 800px wide.

    """
    outputPixelDensities: [Float] = [0.25, 0.5, 1, 2]

    """

    Specifies the image widths to generate. You should rarely need to change
    this. For FIXED and CONSTRAINED images it is better to allow these to be
    determined automatically,
    based on the image size. For FULL_WIDTH images this can be used to override
    the default, which is [750, 1080, 1366, 1920].
    It will never generate any images larger than the source.

    """
    breakpoints: [Int] = [750, 1080, 1366, 1920]

    """

    The "sizes" property, passed to the img tag. This describes the display size of the image.
    This does not affect the generated images, but is used by the browser to
    decide which images to download. You can leave this blank for fixed images,
    or if the responsive image
    container will be the full width of the screen. In these cases we will generate an appropriate value.

    """
    sizes: String

    """
    Background color applied to the wrapper, or when "letterboxing" an image to another aspect ratio.
    """
    backgroundColor: String
    fit: RemoteFileFit = COVER
    cropFocus: [RemoteFileCropFocus]
    quality: Int = 75
  ): GatsbyImageData
}

type Site implements Node @dontInfer {
  buildTime: Date @dateformat
  siteMetadata: SiteSiteMetadata
  polyfill: Boolean
  pathPrefix: String
  jsxRuntime: String
  trailingSlash: String
  graphqlTypegen: Boolean
}

type SiteSiteMetadata {
  title: String
  description: String
  author: String
  siteUrl: String
}

type SiteFunction implements Node @dontInfer {
  functionRoute: String!
  pluginName: String!
  originalAbsoluteFilePath: String!
  originalRelativeFilePath: String!
  relativeCompiledFilePath: String!
  absoluteCompiledFilePath: String!
  matchPath: String
}

type SitePage implements Node @dontInfer {
  path: String!
  component: String!
  internalComponentName: String!
  componentChunkName: String!
  matchPath: String
  pageContext: JSON @proxy(from: "context", fromNode: false)
  pluginCreator: SitePlugin @link(by: "id", from: "pluginCreatorId")
}

type SitePlugin implements Node @dontInfer {
  resolve: String
  name: String
  version: String
  nodeAPIs: [String]
  browserAPIs: [String]
  ssrAPIs: [String]
  pluginFilepath: String
  pluginOptions: JSON
  packageJson: JSON
}

type SiteBuildMetadata implements Node @dontInfer {
  buildTime: Date @dateformat
}

enum GatsbyImageFormat {
  NO_CHANGE
  AUTO
  JPG
  PNG
  WEBP
  AVIF
}

enum GatsbyImageLayout {
  FIXED
  FULL_WIDTH
  CONSTRAINED
}

enum GatsbyImagePlaceholder {
  DOMINANT_COLOR
  TRACED_SVG
  BLURRED
  NONE
}

enum ImageFormat {
  NO_CHANGE
  AUTO
  JPG
  PNG
  WEBP
  AVIF
}

enum ImageFit {
  COVER
  CONTAIN
  FILL
  INSIDE
  OUTSIDE
}

enum ImageLayout {
  FIXED
  FULL_WIDTH
  CONSTRAINED
}

enum ImageCropFocus {
  CENTER
  NORTH
  NORTHEAST
  EAST
  SOUTHEAST
  SOUTH
  SOUTHWEST
  WEST
  NORTHWEST
  ENTROPY
  ATTENTION
}

input DuotoneGradient {
  highlight: String!
  shadow: String!
  opacity: Int
}

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK
  TURNPOLICY_WHITE
  TURNPOLICY_LEFT
  TURNPOLICY_RIGHT
  TURNPOLICY_MINORITY
  TURNPOLICY_MAJORITY
}

input Potrace {
  turnPolicy: PotraceTurnPolicy
  turdSize: Float
  alphaMax: Float
  optCurve: Boolean
  optTolerance: Float
  threshold: Int
  blackOnWhite: Boolean
  color: String
  background: String
}

type ImageSharpFixed {
  base64: String
  tracedSVG: String
  aspectRatio: Float
  width: Float!
  height: Float!
  src: String!
  srcSet: String!
  srcWebp: String
  srcSetWebp: String
  originalName: String
}

type ImageSharpFluid {
  base64: String
  tracedSVG: String
  aspectRatio: Float!
  src: String!
  srcSet: String!
  srcWebp: String
  srcSetWebp: String
  sizes: String!
  originalImg: String
  originalName: String
  presentationWidth: Int!
  presentationHeight: Int!
}

enum ImagePlaceholder {
  DOMINANT_COLOR
  TRACED_SVG
  BLURRED
  NONE
}

input BlurredOptions {
  """Width of the generated low-res preview. Default is 20px"""
  width: Int

  """
  Force the output format for the low-res preview. Default is to use the same
  format as the input. You should rarely need to change this
  """
  toFormat: ImageFormat
}

input JPGOptions {
  quality: Int
  progressive: Boolean = true
}

input PNGOptions {
  quality: Int
  compressionSpeed: Int = 4
}

input WebPOptions {
  quality: Int
}

input AVIFOptions {
  quality: Int
  lossless: Boolean
  speed: Int
}

input TransformOptions {
  grayscale: Boolean
  duotone: DuotoneGradient
  rotate: Int
  trim: Float
  cropFocus: ImageCropFocus = ATTENTION
  fit: ImageFit = COVER
}

type ImageSharpOriginal {
  width: Float
  height: Float
  src: String
}

type ImageSharpResize {
  src: String
  tracedSVG: String
  width: Int
  height: Int
  aspectRatio: Float
  originalName: String
}

type ImageSharp implements Node @childOf(types: ["File"]) @dontInfer {
  fixed(width: Int, height: Int, base64Width: Int, jpegProgressive: Boolean = true, pngCompressionSpeed: Int = 4, grayscale: Boolean, duotone: DuotoneGradient, traceSVG: Potrace, quality: Int, jpegQuality: Int, pngQuality: Int, webpQuality: Int, toFormat: ImageFormat, toFormatBase64: ImageFormat, cropFocus: ImageCropFocus = ATTENTION, fit: ImageFit = COVER, background: String = "rgba(0,0,0,1)", rotate: Int, trim: Float): ImageSharpFixed
  fluid(
    maxWidth: Int
    maxHeight: Int
    base64Width: Int
    grayscale: Boolean
    jpegProgressive: Boolean = true
    pngCompressionSpeed: Int = 4
    duotone: DuotoneGradient
    traceSVG: Potrace
    quality: Int
    jpegQuality: Int
    pngQuality: Int
    webpQuality: Int
    toFormat: ImageFormat
    toFormatBase64: ImageFormat
    cropFocus: ImageCropFocus = ATTENTION
    fit: ImageFit = COVER
    background: String = "rgba(0,0,0,1)"
    rotate: Int
    trim: Float
    sizes: String

    """
    A list of image widths to be generated. Example: [ 200, 340, 520, 890 ]
    """
    srcSetBreakpoints: [Int] = []
  ): ImageSharpFluid
  gatsbyImageData(
    """
    The layout for the image.
    FIXED: A static image sized, that does not resize according to the screen width
    FULL_WIDTH: The image resizes to fit its container. Pass a "sizes" option if
    it isn't going to be the full width of the screen.
    CONSTRAINED: Resizes to fit its container, up to a maximum width, at which point it will remain fixed in size.
    """
    layout: ImageLayout = CONSTRAINED

    """
    The display width of the generated image for layout = FIXED, and the maximum
    display width of the largest image for layout = CONSTRAINED.
    Ignored if layout = FLUID.
    """
    width: Int

    """
    The display height of the generated image for layout = FIXED, and the
    maximum display height of the largest image for layout = CONSTRAINED.
    The image will be cropped if the aspect ratio does not match the source
    image. If omitted, it is calculated from the supplied width,
    matching the aspect ratio of the source image.
    """
    height: Int

    """
    If set along with width or height, this will set the value of the other
    dimension to match the provided aspect ratio, cropping the image if needed.
    If neither width or height is provided, height will be set based on the intrinsic width of the source image.
    """
    aspectRatio: Float

    """
    Format of generated placeholder image, displayed while the main image loads.
    BLURRED: a blurred, low resolution image, encoded as a base64 data URI
    DOMINANT_COLOR: a solid color, calculated from the dominant color of the image (default).
    TRACED_SVG: deprecated. Will use DOMINANT_COLOR.
    NONE: no placeholder. Set "background" to use a fixed background color.
    """
    placeholder: ImagePlaceholder

    """
    Options for the low-resolution placeholder image. Set placeholder to "BLURRED" to use this
    """
    blurredOptions: BlurredOptions

    """
    Options for traced placeholder SVGs. You also should set placeholder to "TRACED_SVG".
    """
    tracedSVGOptions: Potrace

    """
    The image formats to generate. Valid values are "AUTO" (meaning the same
    format as the source image), "JPG", "PNG", "WEBP" and "AVIF".
    The default value is [AUTO, WEBP], and you should rarely need to change
    this. Take care if you specify JPG or PNG when you do
    not know the formats of the source images, as this could lead to unwanted
    results such as converting JPEGs to PNGs. Specifying
    both PNG and JPG is not supported and will be ignored.
    """
    formats: [ImageFormat]

    """
    A list of image pixel densities to generate. It will never generate images
    larger than the source, and will always include a 1x image.
    Default is [ 1, 2 ] for FIXED images, meaning 1x and 2x and [0.25, 0.5, 1,
    2] for CONSTRAINED. In this case, an image with a constrained layout
    and width = 400 would generate images at 100, 200, 400 and 800px wide.
    Ignored for FULL_WIDTH images, which use breakpoints instead
    """
    outputPixelDensities: [Float]

    """
    Specifies the image widths to generate. For FIXED and CONSTRAINED images it
    is better to allow these to be determined automatically,
    based on the image size. For FULL_WIDTH images this can be used to override
    the default, which is [750, 1080, 1366, 1920].
    It will never generate any images larger than the source.
    """
    breakpoints: [Int]

    """
    The "sizes" property, passed to the img tag. This describes the display size of the image.
    This does not affect the generated images, but is used by the browser to decide which images to download.
    You should usually leave this blank, and a suitable value will be calculated. The exception is if a FULL_WIDTH image
    does not actually span the full width of the screen, in which case you should pass the correct size here.
    """
    sizes: String

    """The default quality. This is overridden by any format-specific options"""
    quality: Int

    """Options to pass to sharp when generating JPG images."""
    jpgOptions: JPGOptions

    """Options to pass to sharp when generating PNG images."""
    pngOptions: PNGOptions

    """Options to pass to sharp when generating WebP images."""
    webpOptions: WebPOptions

    """Options to pass to sharp when generating AVIF images."""
    avifOptions: AVIFOptions

    """
    Options to pass to sharp to control cropping and other image manipulations.
    """
    transformOptions: TransformOptions

    """
    Background color applied to the wrapper. Also passed to sharp to use as a
    background when "letterboxing" an image to another aspect ratio.
    """
    backgroundColor: String
  ): GatsbyImageData!
  original: ImageSharpOriginal
  resize(width: Int, height: Int, quality: Int, jpegQuality: Int, pngQuality: Int, webpQuality: Int, jpegProgressive: Boolean = true, pngCompressionLevel: Int = 9, pngCompressionSpeed: Int = 4, grayscale: Boolean, duotone: DuotoneGradient, base64: Boolean, traceSVG: Potrace, toFormat: ImageFormat, cropFocus: ImageCropFocus = ATTENTION, fit: ImageFit = COVER, background: String = "rgba(0,0,0,1)", rotate: Int, trim: Float): ImageSharpResize
}

type user__user implements Node @derivedTypes @dontInfer {
  drupal_id: String
  display_name: String
  drupal_internal__uid: Int
  langcode: String
  name: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  path: user__userPath
  field_full_name: String
  field_title: String
  relationships: user__userRelationships
  preferred_langcode: String
  preferred_admin_langcode: String
  mail: String
  timezone: String
}

type user__userPath {
  langcode: String
}

type user__userRelationships {
  node__legacy_insight: [node__legacy_insight] @link(by: "id", from: "node__legacy_insight___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  file__file: [file__file] @link(by: "id", from: "file__file___NODE")
  redirect__redirect: [redirect__redirect] @link(by: "id", from: "redirect__redirect___NODE")
  node__home_page: [node__home_page] @link(by: "id", from: "node__home_page___NODE")
  entity_subqueue__case_studies: [entity_subqueue__case_studies] @link(by: "id", from: "entity_subqueue__case_studies___NODE")
  entity_subqueue__case_study_slider_homepage: [entity_subqueue__case_study_slider_homepage] @link(by: "id", from: "entity_subqueue__case_study_slider_homepage___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
  node__non_drupal_page: [node__non_drupal_page] @link(by: "id", from: "node__non_drupal_page___NODE")
}

type node__legacy_insight implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: node__legacy_insightPath
  body: node__legacy_insightBody
  relationships: node__legacy_insightRelationships
}

type node__legacy_insightPath {
  alias: String
  pid: Int
  langcode: String
}

type node__legacy_insightBody {
  value: String
  format: String
  processed: String
  summary: String
}

type node__legacy_insightRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  field_legacy_categories: [taxonomy_term__legacy_insight_category] @link(by: "id", from: "field_legacy_categories___NODE")
  field_legacy_tags: [taxonomy_term__legacy_insight_tags] @link(by: "id", from: "field_legacy_tags___NODE")
  component__featured_content: [component__featured_content] @link(by: "id", from: "component__featured_content___NODE")
}

type node_type__node_type implements Node @derivedTypes @dontInfer {
  drupal_id: String
  langcode: String
  status: Boolean
  dependencies: node_type__node_typeDependencies
  third_party_settings: node_type__node_typeThird_party_settings
  name: String
  drupal_internal__type: String
  description: String
  help: String
  new_revision: Boolean
  preview_mode: Int
  display_submitted: Boolean
  relationships: node_type__node_typeRelationships
}

type node_type__node_typeDependencies {
  module: [String]
}

type node_type__node_typeThird_party_settings @derivedTypes {
  menu_ui: node_type__node_typeThird_party_settingsMenu_ui
}

type node_type__node_typeThird_party_settingsMenu_ui {
  available_menus: [String]
  parent: String
}

type node_type__node_typeRelationships {
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
  node__legacy_insight: [node__legacy_insight] @link(by: "id", from: "node__legacy_insight___NODE")
  node__non_drupal_page: [node__non_drupal_page] @link(by: "id", from: "node__non_drupal_page___NODE")
  node__home_page: [node__home_page] @link(by: "id", from: "node__home_page___NODE")
}

type case_study implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: case_studyPath
  field_color: case_studyField_color
  field_hidden: Boolean
  field_image_arrangement: String
  field_inverse_header: Boolean
  field_meta_description: String
  field_meta_title: String
  field_subtitle: String
  relationships: case_studyRelationships
  field_components: [case_studyField_components]
  field_image: case_studyField_image
  field_secondary_image: case_studyField_secondary_image
  field_tertiary_image: case_studyField_tertiary_image
}

type case_studyPath {
  alias: String
  pid: Int
  langcode: String
}

type case_studyField_color {
  color: String
}

type case_studyRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  field_components: [component__imagecomponent__prefootercomponent__quotecomponent__textcomponent__text_image_splitcomponent__text_split_with_video_phonecomponent__videoUnion] @link(by: "id", from: "field_components___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  field_secondary_image: file__file @link(by: "id", from: "field_secondary_image___NODE")
  field_tags: [taxonomy_term__case_study_tags] @link(by: "id", from: "field_tags___NODE")
  field_tertiary_image: file__file @link(by: "id", from: "field_tertiary_image___NODE")
  component__case_study_showcase: [component__case_study_showcase] @link(by: "id", from: "component__case_study_showcase___NODE")
  entity_subqueue__case_studies: [entity_subqueue__case_studies] @link(by: "id", from: "entity_subqueue__case_studies___NODE")
  entity_subqueue__case_study_slider_homepage: [entity_subqueue__case_study_slider_homepage] @link(by: "id", from: "entity_subqueue__case_study_slider_homepage___NODE")
}

union component__imagecomponent__prefootercomponent__quotecomponent__textcomponent__text_image_splitcomponent__text_split_with_video_phonecomponent__videoUnion = component__image | component__prefooter | component__quote | component__text | component__text_image_split | component__text_split_with_video_phone | component__video

type file__file implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__fid: Int
  langcode: String
  filename: String
  uri: file__fileUri
  filemime: String
  filesize: Int
  status: Boolean
  created: Date @dateformat
  changed: Date @dateformat
  relationships: file__fileRelationships
  localFile: File @link(by: "id", from: "localFile___NODE")
}

type file__fileUri {
  value: String
  url: String
}

type file__fileRelationships {
  uid: user__user @link(by: "id", from: "uid___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  component__image: [component__image] @link(by: "id", from: "component__image___NODE")
  component__text_image_split: [component__text_image_split] @link(by: "id", from: "component__text_image_split___NODE")
  component__logo_wall: [component__logo_wall] @link(by: "id", from: "component__logo_wall___NODE")
  component__prefooter: [component__prefooter] @link(by: "id", from: "component__prefooter___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
  component__services_component: [component__services_component] @link(by: "id", from: "component__services_component___NODE")
}

type insight implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  revision_log: String
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: insightPath
  field_color: insightField_color
  field_contact_form: String
  field_do_not_index: Boolean
  field_hidden: Boolean
  field_inverse_header: Boolean
  field_metatags: insightField_metatags
  field_summary: insightField_summary
  relationships: insightRelationships
  field_image: insightField_image
  field_e_book_file: insightField_e_book_file
}

type insightPath {
  alias: String
  pid: Int
  langcode: String
}

type insightField_color {
  color: String
}

type insightField_metatags {
  twitter_cards_type: String
  description: String
  title: String
  og_title: String
  og_description: String
  twitter_cards_description: String
  twitter_cards_site: String
  twitter_cards_site_id: String
  twitter_cards_title: String
}

type insightField_summary {
  value: String
  format: String
  processed: String
}

type insightRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  field_components: [component__imagecomponent__prefootercomponent__quotecomponent__textcomponent__text_image_splitcomponent__text_quote_splitcomponent__videoUnion] @link(by: "id", from: "field_components___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  field_tags: [taxonomy_term__insight_tags] @link(by: "id", from: "field_tags___NODE")
  field_e_book_file: file__file @link(by: "id", from: "field_e_book_file___NODE")
}

union component__imagecomponent__prefootercomponent__quotecomponent__textcomponent__text_image_splitcomponent__text_quote_splitcomponent__videoUnion = component__image | component__prefooter | component__quote | component__text | component__text_image_split | component__text_quote_split | component__video

type taxonomy_term__insight_tags implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__tid: Int
  drupal_internal__revision_id: Int
  langcode: String
  revision_created: Date @dateformat
  status: Boolean
  name: String
  weight: Int
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: taxonomy_term__insight_tagsPath
  relationships: taxonomy_term__insight_tagsRelationships
}

type taxonomy_term__insight_tagsPath {
  alias: String
  pid: Int
  langcode: String
}

type taxonomy_term__insight_tagsRelationships {
  insight: [insight] @link(by: "id", from: "insight___NODE")
}

type insightField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type insightField_e_book_file {
  display: Boolean
  description: String
}

type component__image implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  relationships: component__imageRelationships
  field_image: component__imageField_image
}

type component__imageRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component_type__component_type implements Node @derivedTypes @dontInfer {
  drupal_id: String
  name: String
  relationships: component_type__component_typeRelationships
}

type component_type__component_typeRelationships {
  component__text: [component__text] @link(by: "id", from: "component__text___NODE")
  component__featured_content: [component__featured_content] @link(by: "id", from: "component__featured_content___NODE")
  component__big_links: [component__big_links] @link(by: "id", from: "component__big_links___NODE")
  component__case_study_showcase: [component__case_study_showcase] @link(by: "id", from: "component__case_study_showcase___NODE")
  component__services_component: [component__services_component] @link(by: "id", from: "component__services_component___NODE")
  component__video: [component__video] @link(by: "id", from: "component__video___NODE")
  component__quote_hero: [component__quote_hero] @link(by: "id", from: "component__quote_hero___NODE")
  component__text_quote_split: [component__text_quote_split] @link(by: "id", from: "component__text_quote_split___NODE")
  component__text_split_with_video_phone: [component__text_split_with_video_phone] @link(by: "id", from: "component__text_split_with_video_phone___NODE")
  component__insights: [component__insights] @link(by: "id", from: "component__insights___NODE")
  component__image: [component__image] @link(by: "id", from: "component__image___NODE")
  component__stats: [component__stats] @link(by: "id", from: "component__stats___NODE")
  component__logo_wall: [component__logo_wall] @link(by: "id", from: "component__logo_wall___NODE")
  component__quote: [component__quote] @link(by: "id", from: "component__quote___NODE")
  component__prefooter: [component__prefooter] @link(by: "id", from: "component__prefooter___NODE")
  component__text_image_split: [component__text_image_split] @link(by: "id", from: "component__text_image_split___NODE")
}

type component__text implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_body: component__textField_body
  relationships: component__textRelationships
}

type component__textField_body {
  value: String
  format: String
  processed: String
}

type component__textRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type landing_page implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: landing_pagePath
  field_color: landing_pageField_color
  field_hidden: Boolean
  field_image_arrangement: String
  field_inverse_header: Boolean
  field_subtitle: String
  relationships: landing_pageRelationships
  field_image: landing_pageField_image
  field_secondary_image: landing_pageField_secondary_image
  field_tertiary_image: landing_pageField_tertiary_image
}

type landing_pagePath {
  alias: String
  pid: Int
  langcode: String
}

type landing_pageField_color {
  color: String
}

type landing_pageRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  field_components: [component__big_linkscomponent__case_study_showcasecomponent__featured_contentcomponent__imagecomponent__insightscomponent__logo_wallcomponent__quote_herocomponent__services_componentcomponent__statscomponent__textUnion] @link(by: "id", from: "field_components___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  field_secondary_image: file__file @link(by: "id", from: "field_secondary_image___NODE")
  field_tags: [taxonomy_term__case_study_tags] @link(by: "id", from: "field_tags___NODE")
  field_tertiary_image: file__file @link(by: "id", from: "field_tertiary_image___NODE")
}

union component__big_linkscomponent__case_study_showcasecomponent__featured_contentcomponent__imagecomponent__insightscomponent__logo_wallcomponent__quote_herocomponent__services_componentcomponent__statscomponent__textUnion = component__big_links | component__case_study_showcase | component__featured_content | component__image | component__insights | component__logo_wall | component__quote_hero | component__services_component | component__stats | component__text

type taxonomy_term__case_study_tags implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__tid: Int
  drupal_internal__revision_id: Int
  langcode: String
  revision_created: Date @dateformat
  status: Boolean
  name: String
  weight: Int
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: taxonomy_term__case_study_tagsPath
  relationships: taxonomy_term__case_study_tagsRelationships
}

type taxonomy_term__case_study_tagsPath {
  langcode: String
}

type taxonomy_term__case_study_tagsRelationships {
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type landing_pageField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type landing_pageField_secondary_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type landing_pageField_tertiary_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__featured_content implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_header_text: String
  relationships: component__featured_contentRelationships
  field_content: component__featured_contentField_content
}

union case_studyinsightUnion = case_study | insight

type component__featured_contentRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_content: [case_studyinsightUnion] @link(by: "id", from: "field_content___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__featured_contentField_content @derivedTypes {
  depth: Int
  options: component__featured_contentField_contentOptions
}

type component__featured_contentField_contentOptions {
  css_class: String
}

type component__big_links implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_footer_text: String
  field_header_text: String
  field_links: [component__big_linksField_links]
  relationships: component__big_linksRelationships
}

type component__big_linksField_links {
  uri: String
  title: String
}

type component__big_linksRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__case_study_showcase implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  relationships: component__case_study_showcaseRelationships
}

type component__case_study_showcaseRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_case_studies: [case_study] @link(by: "id", from: "field_case_studies___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__services_component implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_body: component__services_componentField_body
  field_header_text: String
  relationships: component__services_componentRelationships
  field_image: component__services_componentField_image
}

type component__services_componentField_body {
  value: String
  format: String
  processed: String
}

type component__services_componentRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__services_componentField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__video implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_video_controls: Boolean
  field_vimeo_video_link: component__videoField_vimeo_video_link
  relationships: component__videoRelationships
}

type component__videoField_vimeo_video_link {
  uri: String
  title: String
}

type component__videoRelationships {
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
}

type component__quote_hero implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_quotes: [String]
  relationships: component__quote_heroRelationships
}

type component__quote_heroRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__text_quote_split implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_body: component__text_quote_splitField_body
  field_quote: String
  field_reversed: Boolean
  relationships: component__text_quote_splitRelationships
}

type component__text_quote_splitField_body {
  value: String
  format: String
  processed: String
}

type component__text_quote_splitRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
}

type component__text_split_with_video_phone implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_body: component__text_split_with_video_phoneField_body
  field_reversed: Boolean
  field_video_file_name: String
  relationships: component__text_split_with_video_phoneRelationships
}

type component__text_split_with_video_phoneField_body {
  value: String
  format: String
  processed: String
}

type component__text_split_with_video_phoneRelationships {
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
}

type component__insights implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_insights_quantity: Int
  relationships: component__insightsRelationships
}

type component__insightsRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__stats implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  relationships: component__statsRelationships
}

type component__statsRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_stats: [component__stat] @link(by: "id", from: "field_stats___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__logo_wall implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_header_text: String
  field_subhead_text: String
  relationships: component__logo_wallRelationships
  field_images: [component__logo_wallField_images]
}

type component__logo_wallRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_images: [file__file] @link(by: "id", from: "field_images___NODE")
  landing_page: [landing_page] @link(by: "id", from: "landing_page___NODE")
}

type component__logo_wallField_images {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__quote implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_footer_text: String
  field_quote: String
  relationships: component__quoteRelationships
}

type component__quoteRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
}

type component__prefooter implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_primary_body: String
  field_primary_color: component__prefooterField_primary_color
  field_primary_cta: component__prefooterField_primary_cta
  field_primary_lead_in_text: String
  field_secondary_body: String
  field_secondary_color: component__prefooterField_secondary_color
  field_secondary_cta: component__prefooterField_secondary_cta
  field_secondary_lead_in_text: String
  relationships: component__prefooterRelationships
  field_image: component__prefooterField_image
  field_secondary_image: component__prefooterField_secondary_image
}

type component__prefooterField_primary_color {
  color: String
}

type component__prefooterField_primary_cta {
  uri: String
  title: String
}

type component__prefooterField_secondary_color {
  color: String
}

type component__prefooterField_secondary_cta {
  uri: String
  title: String
}

type component__prefooterRelationships {
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  field_secondary_image: file__file @link(by: "id", from: "field_secondary_image___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
}

type component__prefooterField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__prefooterField_secondary_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__text_image_split implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__id: Int
  langcode: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  field_body: component__text_image_splitField_body
  field_reversed: Boolean
  relationships: component__text_image_splitRelationships
  field_image: component__text_image_splitField_image
}

type component__text_image_splitField_body {
  value: String
  format: String
  processed: String
}

type component__text_image_splitRelationships {
  component_type: component_type__component_type @link(by: "id", from: "component_type___NODE")
  field_image: file__file @link(by: "id", from: "field_image___NODE")
  insight: [insight] @link(by: "id", from: "insight___NODE")
  case_study: [case_study] @link(by: "id", from: "case_study___NODE")
}

type component__text_image_splitField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type component__imageField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type entity_subqueue__case_studies implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__name: String
  drupal_internal__revision_id: Int
  langcode: String
  revision_created: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  relationships: entity_subqueue__case_studiesRelationships
}

type entity_subqueue__case_studiesRelationships {
  revision_user: user__user @link(by: "id", from: "revision_user___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  items: [case_study] @link(by: "id", from: "items___NODE")
}

type entity_subqueue__case_study_slider_homepage implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__name: String
  drupal_internal__revision_id: Int
  langcode: String
  revision_created: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  relationships: entity_subqueue__case_study_slider_homepageRelationships
}

type entity_subqueue__case_study_slider_homepageRelationships {
  revision_user: user__user @link(by: "id", from: "revision_user___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
  items: [case_study] @link(by: "id", from: "items___NODE")
}

type case_studyField_components @derivedTypes {
  depth: Int
  options: case_studyField_componentsOptions
}

type case_studyField_componentsOptions {
  view_mode: String
  css_class: String
}

type case_studyField_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type case_studyField_secondary_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type case_studyField_tertiary_image {
  alt: String
  title: String
  width: Int
  height: Int
}

type node__non_drupal_page implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: node__non_drupal_pagePath
  relationships: node__non_drupal_pageRelationships
}

type node__non_drupal_pagePath {
  alias: String
  pid: Int
  langcode: String
}

type node__non_drupal_pageRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
}

type node__home_page implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__nid: Int
  drupal_internal__vid: Int
  langcode: String
  revision_timestamp: Date @dateformat
  status: Boolean
  title: String
  created: Date @dateformat
  changed: Date @dateformat
  promote: Boolean
  sticky: Boolean
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: node__home_pagePath
  field_header_text: [String]
  field_video: String
  field_video_short: String
  relationships: node__home_pageRelationships
}

type node__home_pagePath {
  langcode: String
}

type node__home_pageRelationships {
  node_type: node_type__node_type @link(by: "id", from: "node_type___NODE")
  revision_uid: user__user @link(by: "id", from: "revision_uid___NODE")
  uid: user__user @link(by: "id", from: "uid___NODE")
}

type taxonomy_term__legacy_insight_category implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__tid: Int
  drupal_internal__revision_id: Int
  langcode: String
  status: Boolean
  name: String
  weight: Int
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: taxonomy_term__legacy_insight_categoryPath
  relationships: taxonomy_term__legacy_insight_categoryRelationships
}

type taxonomy_term__legacy_insight_categoryPath {
  langcode: String
}

type taxonomy_term__legacy_insight_categoryRelationships {
  node__legacy_insight: [node__legacy_insight] @link(by: "id", from: "node__legacy_insight___NODE")
}

type taxonomy_term__legacy_insight_tags implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__tid: Int
  drupal_internal__revision_id: Int
  langcode: String
  status: Boolean
  name: String
  weight: Int
  changed: Date @dateformat
  default_langcode: Boolean
  revision_translation_affected: Boolean
  path: taxonomy_term__legacy_insight_tagsPath
  relationships: taxonomy_term__legacy_insight_tagsRelationships
}

type taxonomy_term__legacy_insight_tagsPath {
  langcode: String
}

type taxonomy_term__legacy_insight_tagsRelationships {
  node__legacy_insight: [node__legacy_insight] @link(by: "id", from: "node__legacy_insight___NODE")
}

type redirect__redirect implements Node @derivedTypes @dontInfer {
  drupal_id: String
  drupal_internal__rid: Int
  hash: String
  redirect_type: String
  redirect_source: redirect__redirectRedirect_source
  redirect_redirect: redirect__redirectRedirect_redirect
  language: String
  status_code: Int
  created: Date @dateformat
  relationships: redirect__redirectRelationships
}

type redirect__redirectRedirect_source {
  path: String
}

type redirect__redirectRedirect_redirect {
  uri: String
  title: String
}

type redirect__redirectRelationships {
  uid: user__user @link(by: "id", from: "uid___NODE")
}

type ShopifyPlusFoodAndBeverageSupportCtaGridTwoJson implements Node @childOf(types: ["File"]) @dontInfer {
  icon: String
  title: String
  description: String
}

type ShopifyPlusCtaGridFourJson implements Node @childOf(types: ["File"]) @dontInfer {
  icon: String
  title: String
  description: String
}

type ShopifyJson implements Node @derivedTypes @childOf(types: ["File"]) @dontInfer {
  hero: [ShopifyJsonHero]
  belowHero: [ShopifyJsonBelowHero]
  testimonials: [ShopifyJsonTestimonials]
  services: [ShopifyJsonServices]
}

type ShopifyJsonHero {
  title: String
  subtitle: String
}

type ShopifyJsonBelowHero {
  title: String
  description: String
}

type ShopifyJsonTestimonials {
  field_footer_text: String
  field_quote: String
}

type ShopifyJsonServices {
  title: String
  description: [String]
}

type DrupalconJson implements Node @derivedTypes @childOf(types: ["File"]) @dontInfer {
  header: DrupalconJsonHeader
  booth: DrupalconJsonBooth
  swag: DrupalconJsonSwag
  tag: DrupalconJsonTag
  speakers: DrupalconJsonSpeakers
  insights: DrupalconJsonInsights
  quote: DrupalconJsonQuote
  liveQas: DrupalconJsonLiveQas
}

type DrupalconJsonHeader @derivedTypes {
  title: String
  date: String
  subtitle: String
  links: [DrupalconJsonHeaderLinks]
}

type DrupalconJsonHeaderLinks {
  text: String
  url: String
}

type DrupalconJsonBooth @derivedTypes {
  header: String
  ctas: [DrupalconJsonBoothCtas]
}

type DrupalconJsonBoothCtas {
  text: String
  url: String
}

type DrupalconJsonSwag @derivedTypes {
  header: String
  subheader: String
  body: String
  ctas: [DrupalconJsonSwagCtas]
}

type DrupalconJsonSwagCtas {
  text: String
  url: String
}

type DrupalconJsonTag @derivedTypes {
  header: String
  body: String
  ctas: [DrupalconJsonTagCtas]
}

type DrupalconJsonTagCtas {
  text: String
  url: String
}

type DrupalconJsonSpeakers @derivedTypes {
  header: String
  people: [DrupalconJsonSpeakersPeople]
}

type DrupalconJsonSpeakersPeople {
  img: String
  name: String
  email: String
  title: String
}

type DrupalconJsonInsights {
  header: String
}

type DrupalconJsonQuote {
  text: String
  author: String
}

type DrupalconJsonLiveQas @derivedTypes {
  header: String
  qas: [DrupalconJsonLiveQasQas]
}

type DrupalconJsonLiveQasQas {
  date: String
  title: String
  time: String
}

type DrupalSupportCtaGridTwoJson implements Node @childOf(types: ["File"]) @dontInfer {
  icon: String
  title: String
  description: String
}

type DrupalSupportCtaGridOneJson implements Node @childOf(types: ["File"]) @dontInfer {
  icon: String
  title: String
  description: String
}

type AcquiaProductsJson implements Node @childOf(types: ["File"]) @dontInfer {
  title: String
  icon: String
  description: String
}

type AcquiaMarketingJson implements Node @childOf(types: ["File"]) @dontInfer {
  title: String
  icon: String
  description: String
}

type AcquiaEngageJson implements Node @derivedTypes @childOf(types: ["File"]) @dontInfer {
  header: [AcquiaEngageJsonHeader]
  cta: [AcquiaEngageJsonCta]
  who: [AcquiaEngageJsonWho]
  drumroll: [AcquiaEngageJsonDrumroll]
  talk: [AcquiaEngageJsonTalk]
}

type AcquiaEngageJsonHeader @derivedTypes {
  title: String
  date: String
  subtitle: String
  links: [AcquiaEngageJsonHeaderLinks]
}

type AcquiaEngageJsonHeaderLinks {
  text: String
  url: String
}

type AcquiaEngageJsonCta @derivedTypes {
  one: [AcquiaEngageJsonCtaOne]
  two: [AcquiaEngageJsonCtaTwo]
}

type AcquiaEngageJsonCtaOne {
  before: String
  during: String
  url: String
}

type AcquiaEngageJsonCtaTwo {
  text: String
  url: String
}

type AcquiaEngageJsonWho @derivedTypes {
  header: String
  people: [AcquiaEngageJsonWhoPeople]
}

type AcquiaEngageJsonWhoPeople {
  img: String
  name: String
  email: String
  title: String
}

type AcquiaEngageJsonDrumroll @derivedTypes {
  header: String
  subhead: String
  sites: [AcquiaEngageJsonDrumrollSites]
}

type AcquiaEngageJsonDrumrollSites {
  name: String
  category: String
}

type AcquiaEngageJsonTalk @derivedTypes {
  header: String
  subhead: String
  tagTalks: [AcquiaEngageJsonTalkTagTalks]
  talks: [AcquiaEngageJsonTalkTalks]
}

type AcquiaEngageJsonTalkTagTalks {
  title: String
  date: String
  time: String
  description: String
}

type AcquiaEngageJsonTalkTalks {
  title: String
  date: String
  time: String
  description: String
}

type AboutJson implements Node @derivedTypes @childOf(types: ["File"]) @dontInfer {
  header: [AboutJsonHeader]
  stats: [AboutJsonStats]
  coreValue: [AboutJsonCoreValue]
  imageGallery: [AboutJsonImageGallery]
}

type AboutJsonHeader {
  title: String
  subtitle: String
}

type AboutJsonStats {
  title: String
  subtitle: String
}

type AboutJsonCoreValue @derivedTypes {
  title: String
  image: AboutJsonCoreValueImage
  description: String
}

type AboutJsonCoreValueImage {
  src: String
}

type AboutJsonImageGallery {
  title: String
  imageName: String
}`;
