class ApiResponse {
     constructor(statusCode, DataTransfer, message= "success"){
          this.statusCode = statusCode
          this.data =this.data
          this.message = message
          this.success = statusCode < 400
          this.errors = null
     }
}