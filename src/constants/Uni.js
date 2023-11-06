export const HomeOffice = `A study conducted as part of a project for the lecture on Assisting Health Technologies, which, due to its outstanding performance, resulted in a publication.`;
export const objective1 = `We received a set of sensors from our supervisor and devised a method to monitor activities using readily available sensor technology.`
export const objective2 =`We affixed basic acceleration sensors to an office chair, and additionally integrated lux sensors onto the monitor and fridge to monitor an individual's movements, break durations, and fridge access. The test subject was instructed to power down the monitor during breaks.`;
export const objective3= `We demonstrated that this straightforward sensor setup, coupled with post-processing, enables us to draw meaningful conclusions regarding an individual's activity level while working from home. These insights can serve as the foundation for implementing recommendations to promote a healthier lifestyle.`;
export  const ThesisTitle = `Describing the Driving Conditions of Vehicles using CAN-Bus Data to Validate Biomedical Signal Recordings`;
export const Abstract= `Continuous health monitoring can help identify
early signs and prevent adverse health events, since the highest
cause of death in western societies are cardiovascular diseases.
This work provides a novel approach to classify valid and invalid
steering wheel ECG signals based on driver behaviour recorded
by CAN-bus data. I recorded biomedical data and CAN bus
data while nine different subjects perform test drives in three
different driving scenarios (rural, urban, and highway), each test
drive was 45 minutes long. Based on this data, I developed a
hybrid classification algorithm with a deep Convolutional Neural
Network and a Gated Recurrent Unit, that is capable of detecting
valid an invalid ECG signals. The
classification is solely based on existing sensors that can be
accessed through CAN. My work serves as a foundation for
further improvements and refinements in validating steering
wheel ECG signal recordings.`;

export const Data= `I analyzed all the various signals transmitted over the CAN bus and derived 9 signals out of 1500 transmitted signals that are suitable for capturing driving scenarios and feasible for further analysis.`;
export const Data2= `I analyzed the Data on correlations of disturbances in the steering wheel ECG signal and driver action (like turning the steering wheel).`;
export const Label =`I used a reference ECG signal, which was affixed to the driver's chest during each test drive, to compare it with the steering wheel ECG signal. This comparison allowed me to identify instances when the steering ECG signal contained valid and invalid ECG signals. These findings were then used to create labels for the CAN bus data. It's worth noting that all recorded data, including ECG signals and car data, was synchronized during the recording process.`;
export const Publication = `I successfully completed my thesis, achieving a perfect score of 100%. The thesis has been prepared as a paper and is currently in the process of being published in IEEE.`;