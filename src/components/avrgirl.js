var Avrgirl = require('avrgirl-arduino');

export const InitiateAvrgirl = (file) => {
    const avrgirl = new Avrgirl({
        board: 'mega'
      });
      
      avrgirl.flash(file, function (error) {
        if (error) {
          console.error(error);
        } else {
          console.info('done.');
        }
      });
}

