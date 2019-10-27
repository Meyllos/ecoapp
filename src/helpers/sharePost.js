import Share from 'react-native-share';

export const sharePost = async ({title, url}) => {
  const shareOptions = {
    title,
    failOnCancel: false,
    url,
  };

  try {
    await Share.open(shareOptions);
  } catch (error) {
    console.log(error);
  }
};
