# [Version - 3.0.0]()
## New Feature
* Remove `getOpenARLink` function and implement it on [@real2u/javascript-ar-sdk](https://www.npmjs.com/package/@real2u/javascript-ar-sdk)
* Expose model-viewer parameters

# [Version - 2.1.0]()
## New Feature
* Addition of the `getOpenARLink` function. 
  This function returns a shareable url that will redirect users to the AR experience.

# [Version - 2.0.0]()
## Updates
* Version compatible with the latest version of [Google Model Viewer (2.0.0)](https://github.com/google/model-viewer/releases/tag/v1.0.0), which brought several improvements and corrections.  
You can check these improvements in more detail by checking the link above.

Among the improvements, we highlight:
* Read the field-of-view outer and inner limits with new accessors
* Use 3DOM to customize textures on a loaded model

## Our improvements
* Improvements in the rendering of the popup, with the resumption of the model display instead of a static image captured in real time. After several tests, we realized that usability is very favored with this strategy and that performance issues are very similar.
* Improvements in the stylization of the model, allowing the resizing in a more practical and functional way.

# [Version - 1.1.2]()
## New Feature
* New parameter for defining the color of the progress bar (progressBarColor). The color can be defined in any format and will be applied as a css attribute of the element.

# [Version - 1.0.2]()
## New Feature
* Refactoring the ARLink activation function, following official Google recommendations.
According to the documentation, the corrections contribute to a better composition of the AR trigger URL on Android devices. They also contribute to greater device support and compatibility.

# [Version - 1.0.1]()

## General 

Version compatible with the latest version of [Google Model Viewer (0.10.0)](https://github.com/google/model-viewer/releases/tag/v0.10.0), which brought several improvements and corrections.
You can check these improvements in more detail by checking the link above.

Among the improvements, we highlight:
* Correction of flaws in Windows for some types of GPU.
* Animations running on AR based on WebXR.

## Our improvements
1. In this version, we redefined the strategy for displaying the popup. Previously, the viewer was duplicated to be displayed in the standard component and in the modal at the same time. With the updates, as soon as the modal is triggered, we use the feature of generating a blob object in real time to generate a static image of the model in its exact position. Thus, the root element receives this image as a background when using the popup, which promotes a better experience when using this resource.
2. We also improved some UX details, controlling possible user actions according to the model's loading status and smoothing transitions.