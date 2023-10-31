<template>


  <div>

    <img ref="image" src="/img/home/carte2.png" alt="Image">
    <div class="overlay-text">Hello, World!</div>

    <button @click="generatePdf">Generate pdf</button>

  </div>
</template>

<script>
import { jsPDF } from "jspdf";

export default {
  name: "pdf",
  auth:false,

  methods:{

    generatePdf(){



      const canvas = document.createElement('canvas')
      const image = this.$refs.image

      canvas.width = image.width
      canvas.height = image.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(image, 0, 0)

      ctx.font = '20px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Hello, World!', 50, 50)

      const imageData = canvas.toDataURL('image/jpeg')

      const doc = new jsPDF()
      const page = doc.addPage()

      const pdfData = doc.save()
      const pdfBlob = new Blob([pdfData], { type: 'application/pdf' })
      const pdfUrl = URL.createObjectURL(pdfBlob)

      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'image_with_text.pdf'
      link.click()

      URL.revokeObjectURL(pdfUrl)

    }
  }
}
</script>

<style>
.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
}
</style>