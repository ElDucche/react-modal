# React-Modal

Ceci est un composant React pour intégrer une Modal dans son projet.

Pour l'installer

```bash
npm i @elducchedev/react-modal
```

### Pour l'utiliser dans votre projet :

```javascript
import { Modal } from "@elducchedev/react-modal";
```

Le composant a besoin d'un boolean pour savoir s'il doit être {display: none} ou {display : block}

Puis il faut lui passer un React.NodeElement.

```javascript
<Modal state={boolean}> {children} </Modal>
```
