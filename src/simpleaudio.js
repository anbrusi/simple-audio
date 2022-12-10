import AudioEditing from './audioediting';
import AudioUI from './audioui';
import { Plugin } from 'ckeditor5/src/core';

export default class SimpleAudio extends Plugin {
	static get requires() {
		return [ AudioEditing, AudioUI ];
	}
}
