import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { VisuallyHidden } from './ui/visually-hidden'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
  searchQuery: string
}

export function SearchModal({ isOpen, onClose, searchQuery }: SearchModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <VisuallyHidden>
            <DialogTitle>Search Result</DialogTitle>
          </VisuallyHidden>
          <DialogDescription>
            No results found for &quot;{searchQuery}&quot;. Please try a different search term.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

