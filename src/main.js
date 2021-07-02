const uploadImage = e => {
  if (e.target.files === 0) {
    return;
  }

  const file = e.target.files[0];

  if (file.type.match('image')) {
    const reader = new FileReader();

    reader.onload = (e) => {
      localStorage.setItem('avatar-photo', e.target.result);
      window.location.reload();
    };

    reader.readAsDataURL(file);
  }
};

const deleteImage = () => {
  const hasImage = !!localStorage.getItem('avatar-photo');

  if (hasImage && window.confirm('Delete Profile Photo ?')) {
    localStorage.removeItem('avatar-photo');
    window.location.reload();
  }
};

const image = document.getElementById('avatar');
const imageSrc = localStorage.getItem('avatar-photo');
const defaultImage = 'public/assets/images/default.jpg';

if (imageSrc) {
  image.setAttribute('src', imageSrc);
} else {
  image.setAttribute('src', defaultImage);
}
