import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface FileUploaderState {
  label: string | null;
  description: string | null;
  accept: any[];
  multiple: boolean;
  size: string;
  required: boolean;
  disabled: boolean;
  isImage: boolean;
}

const DEFAULT_STATE: FileUploaderState = {
  label: null,
  description: null,
  accept: [],
  multiple: false,
  size: 'normal',
  required: false,
  disabled: false,
  isImage: true
};

@Injectable()
export class FileUploaderStore extends ComponentStore<FileUploaderState> {
  constructor() {
    super(DEFAULT_STATE);
  }

  // *********** Updaters *********** //
  readonly setLabel = this.updater((state, value: string) => ({
    ...state,
    label: value || null,
  }));
  readonly setDescription = this.updater((state, value: string) => ({
    ...state,
    description: value || null,
  }));
  readonly setAccept = this.updater((state, value: any[]) => ({
    ...state,
    accept: value || [],
  }));
  readonly setMultiple = this.updater((state, value: boolean) => ({
    ...state,
    multiple: value || false,
  }));
  readonly setSize = this.updater((state, value: string) => ({
    ...state,
    size: value || 'normal',
  }));
  readonly setRequired = this.updater((state, value: boolean) => ({
    ...state,
    required: value || false,
  }));
  readonly setDisabled = this.updater((state, value: boolean) => ({
    ...state,
    disabled: value || false,
  }));
  readonly setIsImage = this.updater((state, value: boolean) => ({
    ...state,
    isImage: value || false,
  }));

  // *********** Selectors *********** //
  readonly getLabel$ = this.select(({ label }) => label);
  readonly getDescription$ = this.select(({ description }) => description);
  readonly getAccept$ = this.select(({ accept }) => accept);
  readonly getMultiple$ = this.select(({ multiple }) => multiple);
  readonly getSize$ = this.select(({ size }) => size);
  readonly getRequired$ = this.select(({ required }) => required);
  readonly getDisabled$ = this.select(({ disabled }) => disabled);
  readonly getIsImage$ = this.select(({ isImage }) => isImage);

  // ViewModel of FileUploader component
  readonly vm$ = this.select(
    this.state$,
    this.getLabel$,
    this.getDescription$,
    this.getAccept$,
    this.getMultiple$,
    this.getSize$,
    this.getRequired$,
    this.getDisabled$,
    this.getIsImage$,
    (state, getLabel, getDescription, getAccept, getMultiple, getSize, getRequired, getDisabled, getIsImage) => ({
      label: state.label,
      description: state.description,
      accept: state.accept,
      multiple: state.multiple,
      size: state.size,
      required: state.required,
      disabled: state.disabled,
      isImage: state.isImage,
      getLabel,
      getDescription,
      getAccept,
      getMultiple,
      getSize,
      getRequired,
      getDisabled,
      getIsImage,
    })
  );
}
