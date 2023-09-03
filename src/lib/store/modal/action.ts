export interface ModalAction{
  onOpen(): void;
  onClose(): void;
  toggle(isOpen : boolean): void;
}