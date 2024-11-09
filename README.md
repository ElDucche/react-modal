# React-Modal

Ceci est un composant React pour intégrer une Modal dans son projet.

Pour l'installer

```bash
npm i @elducchedev/react-modal
```
## Pré-requis
Cette modal est basé sur la librairie TailwindCSS.
React 18 ou ultérieur nécessaire.

### Pour l'utiliser dans votre projet :

```javascript
import { Modal } from "@elducchedev/react-modal";
```

### Props du composant

```typescript
interface ModalProps {
  state: boolean;
  children: React.ReactNode;
  resetForm?: boolean;
  className?: string;
}
```

- **state** : boolean pour savoir s'il doit être {display: none} ou {display : block}
- **children** : Le tsx qui va s'écrire entre les balises <Modal> </Modal>
- **resetForm** : Si la modal est utilisé dans un composant qui contient un formulaire, resetForm va vider tous les inputs de ce dernier. Ce champ est optionnel
- **className** : Permet d'ajouter des styles supplémentaires dans le container qui va s'afficher au centre de l'écran.

L'utilisation complète du composant se fais tel quel :

```javascript
<Modal state={true | false} className="modal-exemple" resetForm> {children} </Modal>
```
