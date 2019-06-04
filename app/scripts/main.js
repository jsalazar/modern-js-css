// import { MDCRipple } from '../@material/ripple';
// import { MDCRipple } from 'node_modules/@material/ripple';
import { MDCRipple } from '/@material/ripple/index';
import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCChipSet } from '@material/chips';
import { MDCDialog } from '@material/dialog';
import { MDCList } from '@material/list';
import { MDCMenu } from '@material/menu';
import { MDCSnackbar } from '@material/snackbar';
import { MDCTabBar } from '@material/tab-bar';
// FORMS 
import { MDCFormField } from '@material/form-field';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import { MDCCheckbox } from '@material/checkbox';
import { MDCRadio } from '@material/radio';
import { MDCSlider } from '@material/slider';
import { MDCSwitch } from '@material/switch';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';
import { MDCTextFieldIcon } from '@material/textfield/icon';
import { MDCTextFieldHelperText } from '@material/textfield/helper-text';

// import {MDCTopAppBar} from '@material/top-app-bar';




    const btnRipples = Array.from(document.querySelectorAll('.mdc-button'))
      .map(element => new MDCRipple(element));

    // for a single element  
    // const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));
    
    // for all elements on a page
    const fabRipples = Array.from(document.querySelectorAll('.mdc-fab'))
      .map(element => new MDCRipple(element));

    const cardActionRipple = new MDCRipple(document.querySelector('.mdc-card__primary-action'));

    const toggleFav = document.querySelector('#add-to-favorites');

    const toggleIconRipple = new MDCRipple(toggleFav);
          toggleIconRipple.unbounded = true;
    
    const toggleButton = new MDCIconButtonToggle(toggleFav);
    
    const chipSetEl = document.querySelector('.mdc-chip-set');
    const chipSet = new MDCChipSet(chipSetEl);
    


    // ++++++++++++++++++++++++++++++++++++++++++++++
    // DIALOG WITH A LIST
    const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));
    const list = new MDCList(document.querySelector('.mdc-list'));

    dialog.listen('MDCDialog:opened', () => {
      list.layout();
    });

    const alertDialogBtn = document.querySelector('#alert-dialog');
      alertDialogBtn.addEventListener('click', function() {
        // console.log('i have been clicked ' + Math.random());
        dialog.open();
      }, false);

    

    // ++++++++++++++++++++++++++++++++++++++++++++++
    // MENU -> ANCHOR MENU
    const anchorMenu = new MDCMenu(document.querySelector('.mdc-menu'));

    function closeAnchorMenu() {
      anchorMenu.open = false;  
    }
    closeAnchorMenu();
        
    const anchorMenuBtnToggle = document.querySelector('#mdc-menu--menu-toggle');
          anchorMenuBtnToggle.addEventListener('click', function() {
            console.log('i am open');
            console.log(anchorMenu.open);
            anchorMenu.open = true;
            console.log(anchorMenu.open +''+ Math.random());
            
          }, false);
    


    // ++++++++++++++++++++++++++++++++++++++++++++++
    // SNACKBAR      
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    
    const snackbarBtnToggle = document.querySelector('#mdc-menu--snackbar-toggle');
          snackbarBtnToggle.addEventListener('click', function() {
            snackbar.open();
          }, false);



    // ++++++++++++++++++++++++++++++++++++++++++++++
    // TABS
    const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
    
    // activate 3rd tab and content
    tabBar.activateTab(2);

    const tabBarContents = document.querySelectorAll('.snaky-snaks');
    // hide all content
    tabBarContents.forEach((element,index) => {
      element.classList.add('snaky-snaks--hidden');
    });
    // show content for 3rd tab
    tabBarContents[2].classList.remove('snaky-snaks--hidden');

    tabBar.listen('MDCTabBar:activated', (activatedEvent) => {
      tabBarContents.forEach((element, index) => {
        // if (index === activatedEvent.detail.index) {
        //   element.classList.remove('snaky-snaks--hidden');
        // } else {
        //   element.classList.add('snaky-snaks--hidden');
        // }
      });
    });




    // ++++++++++++++++++++++++++++++++++++++++++++++
    // FORMS

    const shippingForm = document.querySelector('#crane-shipping-form');
    
    shippingForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      alert('Success!');
    });

    new MDCSelect(document.querySelector('.mdc-select'));

    const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
    textFieldElements.forEach((textFieldEl) => {
      new MDCTextField(textFieldEl);
    });

    const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = checkbox;

    const radio = new MDCRadio(document.querySelector('.mdc-radio'));
    const formFieldRadio = new MDCFormField(document.querySelector('.mdc-form-field'));
    formFieldRadio.input = radio;

    const slider = new MDCSlider(document.querySelector('.mdc-slider'));
    slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));

    const switchControl = new MDCSwitch(document.querySelector('.mdc-switch'));

    const characterCounter = new MDCTextFieldCharacterCounter(document.querySelector('.mdc-text-field-character-counter'));
    
    const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field__icon'));

    const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

